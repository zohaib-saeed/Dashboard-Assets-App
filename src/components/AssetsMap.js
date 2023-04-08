import dynamic from "next/dynamic";

const AssetMap = dynamic(() => import("./Admin/Map"), { ssr: false });
export default AssetMap;
