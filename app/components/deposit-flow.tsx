import { SwapRow } from "~/types/global";
import { useState } from "react";
interface Props {
  closeModal: Function;
  row: SwapRow;
}
export default function DepositFlow({ closeModal, row }: Props) {
  let [isSupplying, setIsSupplying] = useState<boolean>(true);
  let [isEnabled, setIsEnabled] = useState<boolean>(false);

  return isSupplying ? (
    <div>
      <div className="py-8" style={{ backgroundColor: "#23262B" }}>
        <div className="float-right">
          <button
            onClick={() => closeModal()}
            className="text-4xl rotate-45 text-gray-400 mr-8"
          >
            +
          </button>
        </div>
        <div className="flex align-middle justify-center items-center">
          <div className="mr-4">
            <img src={row.icon} />
          </div>
          <div>Deposit {row.name}</div>
        </div>

        {!isEnabled && (
          <div>
            <div className="mt-12 mb-6 bg-white w-16 h-16 rounded-full ml-auto mr-auto"></div>
            <div className="max-w-sm text-center m-auto mt-5 mb-5 text-sm text-gray-400">
              To supply or repay {row.name} to the Tender Protocol, you need to
              enable it first.
            </div>
          </div>
        )}
        {isEnabled && (
          <div className="flex flex-col justify-center items-center ">
            <input
              className="bg-transparent text-6xl text-white text-center outline-none"
              placeholder="0"
            />
            <div className="text-gray-400 text-sm m-auto">Max ⬆</div>
          </div>
        )}
      </div>

      <div className="flex mb-10">
        <button
          className="flex-grow py-3 text-brand-green border-b-2 border-b-brand-green"
          onClick={() => setIsSupplying(true)}
        >
          Supply
        </button>
        <button
          className="flex-grow py-3"
          onClick={() => setIsSupplying(false)}
        >
          Widthdraw
        </button>
      </div>
      <div className="py-6 px-12" style={{ background: "#1C1E22" }}>
        <div className="flex mb-4">
          <span className="font-bold mr-3">Supply Rates</span>{" "}
          <img src="/images/box-arrow.svg" alt="box arrow" />
        </div>
        <div className="flex items-center mb-3 text-gray-400 border-b border-b-gray-600 pb-6">
          <div className="mr-3">
            <img src="/images/supply-icon.svg" />
          </div>
          <div className="flex-grow">Supply APY</div>
          <div>X.XX%</div>
        </div>
        <div className="flex items-center text-gray-400 pt-4 pb-8">
          <div className="mr-3">
            <img src="/images/distribution-icon.svg" />
          </div>
          <div className="flex-grow">Distribution APY</div>
          <div>0%</div>
        </div>

        <div className="mb-8">
          {!isEnabled && (
            <button
              onClick={() => setIsEnabled(true)}
              className="py-4 text-center text-white font-bold rounded bg-brand-green w-full"
            >
              Enable
            </button>
          )}

          {isEnabled && (
            <button className="py-4 text-center text-white font-bold rounded bg-brand-green w-full">
              Deposit
            </button>
          )}
        </div>

        <div className="flex text-gray-500">
          <div className="flex-grow">Wallet Balance</div>
          <div>0 {row.name}</div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <div className="py-8" style={{ backgroundColor: "#23262B" }}>
          <div className="float-right">
            <button
              onClick={() => closeModal()}
              className="text-4xl rotate-45 text-gray-400 mr-8"
            >
              +
            </button>
          </div>
          <div className="flex align-middle justify-center items-center">
            <div className="mr-4">
              <img src={row.icon} />
            </div>
            <div>Deposit {row.name}</div>
          </div>
        </div>
        <div className="flex">
          <button
            className="flex-grow py-3"
            onClick={() => setIsSupplying(true)}
          >
            Supply
          </button>
          <button
            className="flex-grow py-3 text-brand-green border-b-2 border-b-brand-green"
            onClick={() => setIsSupplying(false)}
          >
            Widthdraw
          </button>
        </div>
        <div className="p-6" style={{ background: "#1C1E22" }}>
          DEFI!
        </div>
      </div>
    </div>
  );
}
