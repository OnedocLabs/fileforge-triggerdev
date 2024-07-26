import { logger, task } from "@trigger.dev/sdk/v3";
import { Receipt } from "../documents/Receipt";
import { compile } from "@fileforge/react-print";
import { FileforgeClient } from "@fileforge/client";

export const generateReceipt = task({
  id: "generate-receipt",
  run: async (
    payload: {
      receiptId?: number;
      receiptTotal?: number;
    },
    { ctx }
  ) => {
    logger.log("Generating a receipt!", { payload, ctx });

    const ff = new FileforgeClient({
      apiKey: process.env.FILEFORGE_API_KEY,
    });

    const html = await compile(
      Receipt({
        receiptId: payload.receiptId || 1,
        receiptTotal: payload.receiptTotal || 100,
      })
    );

    const { url } = await ff.pdf.generate(html, {
      options: { host: true },
    });

    logger.log(url);

    return {
      url,
    };
  },
});
