import { Toast } from "native-base";
import MyToast from "../components/toasts/toast";

export function showMyToast({ status, title, description }) {
  Toast.show({
    placement: "top",
    render: ({}) => {
      return (
        <MyToast status={status} title={title} description={description} />
      );
    },
  });
}
