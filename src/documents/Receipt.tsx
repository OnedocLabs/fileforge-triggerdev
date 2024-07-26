import { Tailwind, CSS, Font, FloatBottom } from "@fileforge/react-print";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-6 md:h-7"
    viewBox="0 0 179 46"
  >
    <path
      fill="#000"
      d="M0 6.935h19.01v9.223H9.787v3.331H22.34V6.935h9.789v32.13H0V6.935zm13.106 32.128V29.84h9.223v-3.331H9.775v12.554h3.33zM47.574 36V21.329h-4.986v-3.144h4.986v-3.903c0-1.084.326-1.951.976-2.602.65-.65 1.518-.976 2.602-.976h4.336v3.144h-3.144c-.698 0-1.048.362-1.048 1.084v3.253h7.987v3.144h-7.987V36h-3.722zm11.709 0V18.185h3.722V36h-3.722zm1.879-20.128c-.723 0-1.337-.229-1.843-.687-.482-.482-.723-1.096-.723-1.843 0-.77.24-1.385.723-1.843.506-.457 1.12-.686 1.843-.686.722 0 1.325.229 1.806.686.506.458.76 1.072.76 1.843 0 .747-.254 1.361-.76 1.843-.481.458-1.084.687-1.806.687zM66.689 36V10.704h3.723V36h-3.723zm15.606.506c-1.806 0-3.385-.373-4.734-1.12a8.326 8.326 0 01-3.18-3.217c-.746-1.397-1.12-3.01-1.12-4.842v-.433c0-1.855.374-3.47 1.12-4.843.747-1.397 1.783-2.469 3.108-3.216 1.35-.77 2.903-1.156 4.662-1.156 1.71 0 3.204.385 4.48 1.156a7.787 7.787 0 013.036 3.144c.723 1.35 1.084 2.927 1.084 4.734v1.41H77.055c.049 1.565.567 2.818 1.554 3.757 1.012.916 2.265 1.374 3.759 1.374 1.397 0 2.445-.314 3.144-.94a6.536 6.536 0 001.662-2.168l3.071 1.59c-.337.674-.83 1.385-1.481 2.132-.627.747-1.458 1.373-2.494 1.879-1.036.506-2.36.759-3.975.759zm-5.203-11.239h9.865c-.096-1.349-.578-2.397-1.445-3.143-.868-.771-2-1.157-3.397-1.157-1.398 0-2.542.386-3.433 1.157-.868.746-1.398 1.794-1.59 3.143zM95.97 36V21.329h-4.987v-3.144h4.987v-3.903c0-1.084.325-1.951.975-2.602.65-.65 1.518-.976 2.602-.976h4.589v3.144h-3.397c-.698 0-1.047.362-1.047 1.084v3.253h5.131v3.144h-5.132V36h-3.721zm18.463.506c-1.782 0-3.372-.361-4.77-1.084a8.254 8.254 0 01-3.252-3.18c-.795-1.373-1.193-3-1.193-4.879v-.542c0-1.879.398-3.493 1.193-4.842a8.254 8.254 0 013.252-3.18c1.398-.747 2.988-1.12 4.77-1.12 1.783 0 3.373.373 4.77 1.12a8.187 8.187 0 013.289 3.18c.795 1.35 1.192 2.963 1.192 4.842v.542c0 1.88-.397 3.506-1.192 4.879a8.187 8.187 0 01-3.289 3.18c-1.397.723-2.987 1.084-4.77 1.084zm0-3.325c1.638 0 2.963-.518 3.975-1.553 1.036-1.06 1.554-2.518 1.554-4.373v-.325c0-1.855-.506-3.3-1.518-4.337-1.011-1.06-2.348-1.59-4.011-1.59-1.614 0-2.939.53-3.975 1.59-1.012 1.036-1.518 2.482-1.518 4.337v.325c0 1.855.506 3.313 1.518 4.373 1.036 1.035 2.361 1.553 3.975 1.553zM126.512 36V18.185h3.65v2.096h.578c.289-.747.747-1.29 1.373-1.627.651-.36 1.446-.542 2.385-.542h2.133v3.361h-2.277c-1.205 0-2.192.337-2.963 1.012-.771.65-1.157 1.662-1.157 3.035V36h-3.722zm10.666-8.817v-.542c0-1.88.373-3.481 1.12-4.806.771-1.326 1.783-2.35 3.035-3.072 1.253-.723 2.626-1.084 4.12-1.084 1.734 0 3.059.325 3.975.976.939.65 1.626 1.349 2.06 2.095h.578v-2.565h3.614V39.65c0 1.084-.326 1.951-.976 2.602-.626.65-1.494.975-2.602.975h-11.997v-3.252h10.841c.698 0 1.048-.361 1.048-1.084v-5.673h-.579c-.265.433-.638.879-1.12 1.336-.482.458-1.12.832-1.915 1.12-.771.29-1.747.434-2.927.434a8.52 8.52 0 01-4.156-1.047c-1.253-.723-2.252-1.747-2.999-3.072-.747-1.35-1.12-2.951-1.12-4.806zm9.287 5.673c1.614 0 2.939-.506 3.975-1.518 1.06-1.036 1.59-2.457 1.59-4.264v-.325c0-1.855-.518-3.276-1.554-4.264-1.036-1.012-2.373-1.518-4.011-1.518-1.59 0-2.915.506-3.975 1.518-1.036.988-1.554 2.409-1.554 4.264v.325c0 1.807.518 3.228 1.554 4.264 1.06 1.012 2.385 1.518 3.975 1.518zm21.055 3.65c-1.807 0-3.385-.373-4.734-1.12a8.328 8.328 0 01-3.18-3.217c-.747-1.397-1.12-3.01-1.12-4.842v-.433c0-1.855.373-3.47 1.12-4.843.747-1.397 1.782-2.469 3.107-3.216 1.35-.77 2.903-1.156 4.662-1.156 1.711 0 3.204.385 4.481 1.156a7.78 7.78 0 013.035 3.144c.723 1.35 1.085 2.927 1.085 4.734v1.41H162.28c.048 1.565.566 2.818 1.554 3.757 1.012.916 2.264 1.374 3.758 1.374 1.397 0 2.445-.314 3.144-.94a6.525 6.525 0 001.662-2.168l3.072 1.59c-.338.674-.831 1.385-1.482 2.132-.626.747-1.457 1.373-2.493 1.879-1.036.506-2.361.759-3.975.759zm-5.204-11.239h9.865c-.096-1.349-.578-2.397-1.445-3.143-.867-.771-2-1.157-3.397-1.157-1.397 0-2.542.386-3.433 1.157-.867.746-1.397 1.794-1.59 3.143z"
    ></path>
  </svg>
);

export const Receipt = ({
  receiptId,
  receiptTotal,
}: {
  receiptId: number;
  receiptTotal: number;
}) => {
  return (
    <>
      <CSS>
        {`
        @page {
          size: letter portrait;
          margin: 1in;
          background: rgb(241 245 249);
        }
        `}
      </CSS>
      <Font url="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
      <Tailwind
        config={{
          theme: {
            extend: {
              fontFamily: {
                sans: ['"Inter"', "sans-serif"],
              },
            },
          },
        }}
      >
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="text-2xl text-center my-12 font-bold">
          Receipt #{receiptId}
        </h1>
        <div className="shadow-xl text-xl border-t-2 border-t-blue-400 rounded-md p-16 max-w-xl mx-auto text-center bg-white">
          Thank you for your purchase!
          <br />
          Your total is ${receiptTotal}.
          <p className="text-sm text-gray-500 mt-8">
            Purchase made at Fileforge on {new Date().toLocaleString()}.
          </p>
        </div>
        <FloatBottom>
          <p className="text-center text-gray-500 text-sm">
            Powered by{" "}
            <a className="underline" href="https://www.fileforge.com/">
              Fileforge
            </a>
          </p>
        </FloatBottom>
      </Tailwind>
    </>
  );
};