import { CopyBtnProps } from "../../interfaces";
export default function CopyBtn({ copyFun, shortenLink }: CopyBtnProps) {
  return (
    <button
      data-url={shortenLink}
      onClick={copyFun}
      className="primary-btn copy-btn"
    >
      copy
    </button>
  );
}
