import { connect } from "mongoose";

export function mongoConnect(onSuccess: () => void) {
  const uri = process.env.MONGODB_URI!;
  connect(uri)
    .then(() => {
      console.log("Connected To MongoDB");
      onSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
}
