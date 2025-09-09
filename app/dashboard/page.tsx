import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, CircleCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Dashbaord(){

    const campaign = [
        {
            name : "Just Herbs",
            status : "Active"
        },
        {
            name : "Juicy Chemistry",
            status : "Active"
        },
        {
            name : "Hyugalife 2",
            status : "Active"
        },
        {
            name : "Honey Veda",
            status : "Active"
        },
        {
            name : "Hemp Streat",
            status : "Active"
        },
        {
            name : "Healthy Hey2",
            status : "Active"
        }
    ];

    const linkdin_accounts = [
        {
            name:"Pulkit Garg",
            image:"https://github.com/shadcn.png",
            email:"pulkitgarg@gmail.com",
            status:"Connected",
            requests:17
        },
        {
            name:"Bhavya Arora",
            email:"bhavyaarora@gmail.com",
            image:"https://github.com/shadcn.png",
            status:"Connected",
            requests:17
        },
        {
            name:"Indrajit Sahani",
            email:"indrajitsahani@gmail.com",
            image:"https://github.com/shadcn.png",
            status:"Connected",
            requests:17
        },
        {
            name:"Javesh Lakhani",
            email:"javeslakhani@gmail.com",
            image:"https://github.com/shadcn.png",
            status:"Connected",
            requests:17
        }
    ];

    const recent_activity = [
        {
            name:"Om Satyarthy",
            position:"Regional Head",
            image:"https://github.com/shadcn.png",
            campaign:"Gynoveda",
            status:"Approved"
        },
        {
            name:"Om Satyarthy",
            position:"Regional Head",
            image:"https://github.com/shadcn.png",
            campaign:"Gynoveda",
            status:"Approved"
        },
        {
            name:"Om Satyarthy",
            position:"Regional Head",
            image:"https://github.com/shadcn.png",
            campaign:"Gynoveda",
            status:"Approved"
        },
        {
            name:"Om Satyarthy",
            position:"Regional Head",
            image:"https://github.com/shadcn.png",
            campaign:"Gynoveda",
            status:"Approved"
        },
        {
            name:"Om Satyarthy",
            position:"Regional Head",
            image:"https://github.com/shadcn.png",
            campaign:"Gynoveda",
            status:"Approved"
        },
        {
            name:"Om Satyarthy",
            position:"Regional Head",
            image:"https://github.com/shadcn.png",
            campaign:"Gynoveda",
            status:"Approved"
        },
        {
            name:"Om Satyarthy",
            position:"Regional Head",
            image:"https://github.com/shadcn.png",
            campaign:"Gynoveda",
            status:"Approved"
        },
        {
            name:"Om Satyarthy",
            position:"Regional Head",
            image:"https://github.com/shadcn.png",
            campaign:"Gynoveda",
            status:"Approved"
        },
    ];


    return(
        <div className="mb-4 flex flex-col md:flex-row gap-2 md:justify-between">
            <div className="flex flex-col gap-4 flex-1">
                <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                    <CardTitle className=" font-bold">Campaigns</CardTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className=" border-1 py-1 px-2 rounded-sm flex items-center cursor-pointer">All Campaigns <ChevronDown/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Active</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Pending</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Completed</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>
                <CardContent>
                    {
                        campaign.map((item)=>(
                            <div className="my-5">
                                <div className=" flex items-center justify-between">
                                    <p className=" font-bold">{item.name}</p>
                                    <div className=" bg-gray-200 px-2 rounded-sm text-green-600 font-bold">{item.status}</div>
                                </div>
                                <div className="w-full h-[3px] bg-gray-300 my-2 rounded-sm"></div>
                            </div>
                        ))
                    }
                </CardContent>
    
                </Card>

                <Card className="w-full">
                <CardHeader className="">
                    <CardTitle className=" font-bold">Linkdin Accounts</CardTitle>
                    <div className="mt-3 flex items-center justify-between border-b pb-2 w-full">
                        <p className="w-[50%] font-medium">Accounts</p>
                        <p className="w-[25%] text-center font-medium">Status</p>
                        <p className="w-[25%] text-center font-medium">Requests</p>
                    </div>
                </CardHeader>
                <CardContent>
                    {
                        linkdin_accounts.map((item)=>(
                            <div className="mb-4 flex">
                                <div className="flex items-center w-[60%]">
                                    <Avatar>
                                        <AvatarImage src={item.image} />
                                    </Avatar>
                                    <div className="ml-2">
                                        <h3 className="text-sm font-semibold">{item.name}</h3>
                                        <p className="text-xs text-gray-500">{item.email}</p>
                                    </div>
                                </div>
                                <div className="w-[20%] text-center"><p className=" bg-blue-900 text-white rounded-sm flex items-center justify-center gap-1"> <CircleCheck className="w-4 h-4"/> {item.status}</p></div>
                                <div className="w-[20%] text-center">{item.requests}</div>
                            </div>
                        ))
                    }
                </CardContent>
                </Card>
            </div>

            <div className="flex-1">
                <Card className=" w-full">
                    <CardHeader className="">
                        <div className="flex items-center justify-between">
                            <CardTitle>Campaigns</CardTitle>
                            <DropdownMenu>
                            <DropdownMenuTrigger className=" border-1 px-2 py-1 font-semibold rounded-sm flex items-center cursor-pointer">Most Recent<ChevronDown/></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Active</DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>Pending</DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>Completed</DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="mt-3 flex items-center justify-between border-b pb-2 w-full">
                            <p className="">Lead</p>
                            <p className="">Campaign</p>
                            <p className="">Status</p>
                        </div>
                    </CardHeader>
                <CardContent>
                    {
                        recent_activity.map((item)=>(
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center ">
                                    <Avatar>
                                        <AvatarImage src={item.image} />
                                    </Avatar>
                                    <div className="ml-2">
                                        <h3 className="text-sm font-semibold">{item.name}</h3>
                                        <p className="text-xs text-gray-500">{item.position}</p>
                                    </div>
                                </div>
                                <div className="text-center">{item.campaign}</div>
                                <div className="text-center"><p className=" bg-green-900 text-white rounded-sm flex items-center justify-center gap-1"> <CircleCheck className="w-4 h-4"/> {item.status}</p></div>
                            </div>
                            <div className="w-full h-[1px] bg-gray-300 my-2 rounded-sm"></div>
                            </div>

                        ))
                    }
                </CardContent>
                </Card>
            </div>
        </div>
    )
}