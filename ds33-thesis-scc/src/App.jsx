import "./App.css";

import Header from "./components/Header";
import UploadButton from "./components/UploadButton";

function App() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="container-fluid bg-white px-2 py-4 px-md-3 py-md-5">
        <div className="container-md mx-md-auto p-0">
          {/* Functionalities */}
          <section className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-4 gap-lg-0">
            <div className="d-flex align-items-center gap-2">
              <p className="m-0 fw-semibold text-black">SCC File:</p>
              <div>
                <input className="form-control" type="file" id="sccFile" accept="image/png, image/jpg" placeholder="SCC File Input" />
              </div>
            </div>

            <div className="d-flex gap-2">
              <UploadButton>w/Normalization</UploadButton>
              <UploadButton>w/o Normalization</UploadButton>
            </div>
          </section>

          {/* Output Images */}
          <section className="container-fluid mt-5">
            <div className="row row-cols-md-2 row-cols-xl-3 gap-5 gap-md-0">
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <p className="m-0 text-center fw-semibold">
                    Vit B-16 (Park et al.)
                  </p>
                  <img
                    src="https://placehold.co/600x600"
                    alt="Output Vit-B16"
                    className="rounded-2 shadow"
                  />
                  <div className="rounded-3 border border-2 border-black p-2 mt-3 d-flex flex-column gap-3 align-items-center">
                    <p className="fs-5 fw-semibold m-0">Results</p>
                    <div className="text-center">
                      <p className="m-0"><span className="fw-medium">Prediction:</span> Margin Positive</p>
                      <p className="m-0"><span className="fw-medium">Confidence:</span> 100%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <p className="m-0 text-center fw-semibold">ConvNeXt</p>
                  <img
                    src="https://placehold.co/600x600"
                    alt="Output ConvNeXt"
                    className="rounded-2 shadow"
                  />
                  <div className="rounded-3 border border-2 border-black p-2 mt-3 d-flex flex-column gap-3 align-items-center">
                    <p className="fs-5 fw-semibold m-0">Results</p>
                    <div className="text-center">
                      <p className="m-0"><span className="fw-medium">Prediction:</span> Margin Positive</p>
                      <p className="m-0"><span className="fw-medium">Confidence:</span> 100%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mt-md-4 mt-lg-0">
                <div className="d-flex flex-column gap-3">
                  <p className="m-0 text-center fw-semibold">CoAtNet</p>
                  <img
                    src="https://placehold.co/600x600"
                    alt="Output CoAtNet"
                    className="rounded-2 shadow"
                  />
                  <div className="rounded-3 border border-2 border-black p-2 mt-3 d-flex flex-column gap-3 align-items-center">
                    <p className="fs-5 fw-semibold m-0">Results</p>
                    <div className="text-center">
                      <p className="m-0"><span className="fw-medium">Prediction:</span> Margin Positive</p>
                      <p className="m-0"><span className="fw-medium">Confidence:</span> 100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
