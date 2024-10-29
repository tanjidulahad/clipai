import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import Image from "next/image";


const AlertDialogue = ({isLoading}) => {
   return (
    <AlertDialog open={isLoading}>
      <AlertDialogContent>
        <div className="flex flex-col py-10 gap-3 justify-center items-center">
            <Image src={"/process.gif"} alt="processing" width={100} height={100}/>
            <p>Your content is generating. Please be paitent</p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
};

export default AlertDialogue;