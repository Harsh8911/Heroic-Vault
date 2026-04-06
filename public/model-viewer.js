(function () {
  function toVector3(value, fallback) {
    if (!value) {
      return fallback.clone();
    }
    return new THREE.Vector3(value.x, value.y, value.z);
  }

  function updateProgress(fillEl, labelEl, percent, label) {
    var safePercent = Math.max(0, Math.min(100, percent || 0));
    if (fillEl) {
      fillEl.style.width = safePercent + "%";
    }
    if (labelEl) {
      labelEl.textContent = label || "Loading 3D model... " + Math.round(safePercent) + "%";
    }
  }

  function fitCameraToObject(camera, controls, object, offset) {
    var box = new THREE.Box3().setFromObject(object);
    var size = box.getSize(new THREE.Vector3());
    var center = box.getCenter(new THREE.Vector3());

    var maxDim = Math.max(size.x, size.y, size.z);
    var fov = camera.fov * (Math.PI / 180);
    var cameraDistance = Math.abs((maxDim / 2) / Math.tan(fov / 2)) * (offset || 1.5);

    camera.position.set(center.x + cameraDistance * 0.18, center.y + cameraDistance * 0.08, center.z + cameraDistance);
    controls.target.copy(center);
    controls.minDistance = cameraDistance * 0.35;
    controls.maxDistance = cameraDistance * 3.5;
    controls.update();
  }

  function traverseMesh(node, cb) {
    node.traverse(function (child) {
      if (child && child.isMesh) {
        cb(child);
      }
    });
  }

  window.HeroicViewer = {
    init: function (config) {
      var container = document.getElementById("viewer-frame");
      var canvas = document.getElementById("viewer-canvas");
      var loader = document.getElementById("loader");
      var progressFill = document.getElementById("progress-fill");
      var loaderLabel = document.getElementById("loader-label");
      var status = document.getElementById("status-pill");
      var errorBox = document.getElementById("error-box");
      var lightValue = document.getElementById("light-value");
      var exposureValue = document.getElementById("exposure-value");

      if (!container || !canvas) {
        return;
      }

      var scene = new THREE.Scene();
      scene.background = new THREE.Color(config.backgroundColor || "#f4efe2");

      var camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 2000);
      var initialPosition = toVector3(config.initialCamera, new THREE.Vector3(0, 2.2, 8.2));
      var initialTarget = toVector3(config.initialTarget, new THREE.Vector3(0, 1, 0));

      camera.position.copy(initialPosition);

      var renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true
      });
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.shadowMap.enabled = true;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      var controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.065;
      controls.autoRotate = !!config.autoRotate;
      controls.autoRotateSpeed = 1.2;
      controls.maxPolarAngle = Math.PI * 0.92;
      controls.target.copy(initialTarget);

      var hemiLight = new THREE.HemisphereLight(0xfbf7ea, 0x36525f, 0.9);
      var keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
      keyLight.position.set(6, 8, 5);
      keyLight.castShadow = true;
      var rimLight = new THREE.DirectionalLight(0xc7f9f3, 0.8);
      rimLight.position.set(-6, 2, -4);

      scene.add(hemiLight);
      scene.add(keyLight);
      scene.add(rimLight);

      var currentModel = null;
      var wireframeOn = false;

      function setStatus(text) {
        if (status) {
          status.textContent = text;
        }
      }

      function setError(message) {
        if (!errorBox) {
          return;
        }
        if (!message) {
          errorBox.classList.remove("visible");
          errorBox.textContent = "";
          return;
        }
        errorBox.textContent = message;
        errorBox.classList.add("visible");
      }

      function resizeRenderer() {
        var width = container.clientWidth;
        var height = container.clientHeight;
        if (!width || !height) {
          return;
        }
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }

      function resetView() {
        if (currentModel) {
          fitCameraToObject(camera, controls, currentModel, 1.38);
        } else {
          camera.position.copy(initialPosition);
          controls.target.copy(initialTarget);
          controls.update();
        }
      }

      function setWireframeState(forceState) {
        wireframeOn = typeof forceState === "boolean" ? forceState : !wireframeOn;
        if (currentModel) {
          traverseMesh(currentModel, function (mesh) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(function (material) {
                material.wireframe = wireframeOn;
              });
            } else if (mesh.material) {
              mesh.material.wireframe = wireframeOn;
            }
          });
        }

        var wireBtn = document.getElementById("btn-wireframe");
        if (wireBtn) {
          wireBtn.classList.toggle("active", wireframeOn);
        }
      }

      function setRotateState(forceState) {
        var next = typeof forceState === "boolean" ? forceState : !controls.autoRotate;
        controls.autoRotate = next;
        var rotateBtn = document.getElementById("btn-rotate");
        if (rotateBtn) {
          rotateBtn.classList.toggle("active", next);
          rotateBtn.textContent = next ? "Pause Spin" : "Auto Spin";
        }
      }

      function toggleFullscreen() {
        if (!document.fullscreenElement) {
          if (container.requestFullscreen) {
            container.requestFullscreen();
          }
        } else {
          document.exitFullscreen();
        }
      }

      function snapshot() {
        try {
          var url = renderer.domElement.toDataURL("image/png");
          var link = document.createElement("a");
          link.href = url;
          link.download = (config.snapshotName || "heroic-model") + "-view.png";
          link.click();
        } catch (err) {
          setError("Snapshot could not be captured in this browser.");
        }
      }

      document.getElementById("btn-rotate")?.addEventListener("click", function () {
        setRotateState();
      });

      document.getElementById("btn-reset")?.addEventListener("click", function () {
        resetView();
      });

      document.getElementById("btn-wireframe")?.addEventListener("click", function () {
        setWireframeState();
      });

      document.getElementById("btn-fullscreen")?.addEventListener("click", function () {
        toggleFullscreen();
      });

      document.getElementById("btn-snapshot")?.addEventListener("click", function () {
        snapshot();
      });

      document.getElementById("light-range")?.addEventListener("input", function (event) {
        var value = Number(event.target.value || 1);
        keyLight.intensity = value;
        if (lightValue) {
          lightValue.textContent = value.toFixed(1) + "x";
        }
      });

      document.getElementById("exposure-range")?.addEventListener("input", function (event) {
        var value = Number(event.target.value || 1);
        renderer.toneMappingExposure = value;
        if (exposureValue) {
          exposureValue.textContent = value.toFixed(1) + "x";
        }
      });

      document.addEventListener("fullscreenchange", resizeRenderer);
      window.addEventListener("resize", resizeRenderer);

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }

      setStatus("Loading model...");
      setError("");
      updateProgress(progressFill, loaderLabel, 10, "Preparing scene...");

      var loadPromise = Promise.resolve().then(function () {
        return config.loadModel({
          scene: scene,
          camera: camera,
          renderer: renderer,
          controls: controls,
          onProgress: function (percent, label) {
            updateProgress(progressFill, loaderLabel, percent, label);
          }
        });
      });

      loadPromise.then(function (modelRoot) {
        currentModel = modelRoot || null;
        if (currentModel) {
          fitCameraToObject(camera, controls, currentModel, config.cameraFitOffset || 1.35);
        }
        if (typeof config.onModelReady === "function") {
          config.onModelReady({
            model: currentModel,
            scene: scene,
            camera: camera,
            controls: controls,
            renderer: renderer,
            resetView: resetView
          });
        }

        updateProgress(progressFill, loaderLabel, 100, "Model ready");
        setTimeout(function () {
          loader?.classList.add("hidden");
        }, 250);
        setStatus("Interactive mode ready");
      }).catch(function (error) {
        setError("Model could not be loaded. " + (error && error.message ? error.message : "Please check files."));
        setStatus("Load failed");
      });

      setRotateState(!!config.autoRotate);
      setWireframeState(false);
      animate();

      return {
        scene: scene,
        camera: camera,
        renderer: renderer,
        controls: controls
      };
    }
  };
})();
