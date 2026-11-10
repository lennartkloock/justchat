import initExtension from "poc-extension";

export const init = async () => {
    await initExtension();
    console.log("init finished");
};
