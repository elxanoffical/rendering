import "server-only";

export const ServerSideFunction = () => {
  console.log(
    `use multiple libraries,
        use enivorment variables,
        interact with a database,
        process confidential
        `
  );
  return "server result";
};
