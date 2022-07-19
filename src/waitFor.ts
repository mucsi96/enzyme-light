import { act } from "react-test-renderer";

export function waitFor(
  callback: Function,
  { interval = 50, timeout = 1000 } = {}
): Promise<undefined> {
  return act(
    () =>
      new Promise((resolve, reject) => {
        const startTime = Date.now();

        const nextInterval = () => {
          setTimeout(() => {
            try {
              callback();
              resolve();
            } catch (err) {
              if (Date.now() - startTime > timeout) {
                reject(new Error("Timed out."));
              } else {
                nextInterval();
              }
            }
          }, interval);
        };

        nextInterval();
      })
  );
}
