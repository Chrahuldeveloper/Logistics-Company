import React from "react";

export default function ValueAddService({ data }) {
  return (
    <section>
      <div>
        <img src="https://venovet.com/assets/images/s4.jpg" alt="" />
        <div className=" text-white bg-[#1165cd] p-8 rounded-lg -translate-y-10  md:max-w-3xl mx-auto text-sm md:text-base">
          {data.Para}
        </div>
      </div>

      {/* Value Added Services section */}
      <div>
        <h1 className="text-lg md:text-xl lg:text-2xl">
          Value Added Services Include
        </h1>

        <div className="flex flex-col items-start gap-6 lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data.SubCat1.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data.SubCat1.Tittle}</h1>
            <p className="text-[#7a7a7a] text-sm leading-7">
              {data.SubCat1.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data.SubCat2.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data.SubCat2.Tittle}</h1>
            <p className="text-[#7a7a7a] text-sm leading-7">
              {data.SubCat2.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data.SubCat3.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data.SubCat3.Tittle}</h1>
            <p className="text-[#7a7a7a] text-sm leading-7">
              {data.SubCat3.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data.SubCat4.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data.SubCat4.Tittle}</h1>
            <p className="text-[#7a7a7a] text-sm leading-7">
              {data.SubCat4.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data.SubCat5.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data.SubCat5.Tittle}</h1>
            <p className="text-[#7a7a7a] text-sm leading-7">
              {data.SubCat5.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data.SubCat6.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data.SubCat6.Tittle}</h1>
            <p className="text-[#7a7a7a] text-sm leading-7">
              {data.SubCat6.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data.SubCat7.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data.SubCat7.Tittle}</h1>
            <p className="text-[#7a7a7a] text-sm leading-7">
              {data.SubCat7.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data.SubCat8.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data.SubCat8.Tittle}</h1>
            <p className="text-[#7a7a7a] text-sm leading-7">
              {data.SubCat8.Para}
            </p>
          </div>
        </div>
      </div>
      {/* Value Added Services section */}
    </section>
  );
}
