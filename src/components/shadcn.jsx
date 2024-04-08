import {Button} from "../shadcn/ui/button";
import { Mail } from "lucide-react"

function ShadcnDemo() {
    return (
        <div className='text-center mt-10'>
            Shadcn Demo
            <div className="flex gap-4 items-center justify-center"> 
                <Button>Button</Button>
                <Button variant="destructive">Destructive</Button>
                <Button>
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
            </div>
           
        </div>
    )
  }
  
  export default ShadcnDemo