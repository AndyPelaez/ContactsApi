import { connect } from "mongoose";

export async function mongoConnect(onSuccess?: () => void) {
  const uri = process.env.MONGODB_URI!;
  try {
    await connect(uri);
    console.log("Connected To MongoDB");
    onSuccess && onSuccess();
  } catch (err) {
    console.log(err);
  }
}
