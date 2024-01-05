"use client";

type PropType = {
  handler?: any;
};

const Print = ({ handler }: PropType) => {
  return (
    <>
      <div className="">
        <div className="print:hidden absolute right-6 top-6">
          <button
            type="button"
            className="border rounded-2xl px-3 py-2 text-black"
            onClick={handler}
          >
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default Print;
