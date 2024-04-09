import { useState } from 'react';
import { cn } from "@/lib/utils"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  ShipWheel,
  Check, ChevronsUpDown,
} from "lucide-react"
import { Badge } from "../shadcn/ui/badge"
import { Button } from "../shadcn/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "../shadcn/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "../shadcn/ui/dropdown-menu"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "../shadcn/ui/breadcrumb"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "../shadcn/ui/tabs"
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "../shadcn/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../shadcn/ui/popover"
import { Input } from "../shadcn/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar"

const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
  ]

export default function ShadcnDemo({setUI}) {
    const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Pinbox</span>
            </div>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <div
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer text-muted-foreground transition-all hover:bg-muted"
              >
                <Home className="h-4 w-4" />
                我的收藏
              </div>
              <div
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer text-muted-foreground transition-all hover:bg-muted"
              >
                <ShipWheel className="h-4 w-4" />
                发现
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </div>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>升级专业版</CardTitle>
                <CardDescription>
                解锁所有功能并无限制地访问我们的支持团队。
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  升级
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="请输入搜索内容"
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>ysir</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>用户中心</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>设置</DropdownMenuItem>
              <DropdownMenuItem>帮助</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>退出登录</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className='flex justify-between'> 
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                <BreadcrumbItem>
                技术
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                前端
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>前端 UI 库</BreadcrumbPage>
                </BreadcrumbItem>
                </BreadcrumbList>
          </Breadcrumb>
          <div className='flex justify-between items-center'>
            <Tabs defaultValue="all" className='mr-4'>
                <TabsList className="h-7">
                    <TabsTrigger value="all" className="h-6">全部</TabsTrigger>
                    <TabsTrigger value="active" className="h-6">网页</TabsTrigger>
                    <TabsTrigger value="draft" className="h-6">图片</TabsTrigger>
                    <TabsTrigger value="archived" className="h-6">
                    文本
                    </TabsTrigger>
                </TabsList>
                </Tabs>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 gap-1">
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        UI 切换
                      </span>
                      <ChevronsUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem onClick={() => setUI('chakra')}>
                    chakra
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem onClick={() => setUI('next')}>next</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem onClick={() => setUI('mantine')}>
                    mantine
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem onClick={() => setUI('daisy')}>
                    daisy
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem onClick={() => setUI('shadcn')}> 
                    shadcn
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
        <div className='mt-4 flex'>
            <div className='w-64 h-96 mr-8'>
            <Card className="w-[264px]">
                <CardHeader>
                    <CardTitle className="text-base">Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                   <img className='rounded' src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt="" />
                </CardContent>
                <CardFooter className="flex gap-1">
                    <Badge>技术</Badge><Badge>前端</Badge>
                </CardFooter>
                </Card>
            </div>
        </div>
       
        
        </main>
      </div>
    </div>
  )
}