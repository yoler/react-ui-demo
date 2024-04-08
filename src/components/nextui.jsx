import {
    Button, 
    Breadcrumbs, 
    BreadcrumbItem,
    Input,
    Avatar,
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem,
    Card, 
    CardHeader, 
    CardFooter,
    CardBody, 
    Image,
    Chip,
    Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure
} from "@nextui-org/react";
import { HamburgerIcon, SearchIcon, StarIcon, SunIcon, ChevronRightIcon, ViewIcon, EditIcon, ChevronDownIcon} from '@chakra-ui/icons'

function NextuiDemo({setUI}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div>
            <div className='h-14 shadow-md flex items-center px-4' >
                <HamburgerIcon w={6} h={6}/>
                <div className='ml-4'>我的收藏 </div>
                <div className='flex-1 mx-8'>
                <Input
                    type="email"
                    label=""
                    placeholder="请输入搜索内容"
                    labelPlacement="outside"
                    startContent={
                        <SearchIcon color='gray.300' />
                    }
                    />
                </div>
                <div>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </div>
            </div>
            <div className='flex'>
                <div className='w-80 py-3'>
                    <div className='flex items-center cursor-pointer px-6 py-3 hover:bg-slate-200 rounded-r-full'> 
                        <StarIcon />
                        <div className='ml-2'>我的收藏</div>
                    </div>
                    <div className='flex items-center cursor-pointer px-6 py-3 hover:bg-slate-200 rounded-r-full'> 
                        <SunIcon />
                        <div className='ml-2'>发现</div>
                    </div>
                </div>
                <div className='flex-1 px-8 py-4'>
                <div className='flex justify-between'> 
                    <Breadcrumbs variant={'solid'}>
                        <BreadcrumbItem>技术</BreadcrumbItem>
                        <BreadcrumbItem>前端</BreadcrumbItem>
                        <BreadcrumbItem>前端 UI 库</BreadcrumbItem>
                    </Breadcrumbs>
                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button 
                                variant="flat" 
                                >
                                UI切换
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="chakra" onAction={(key) => setUI(key)}>chakra</DropdownItem>
                                <DropdownItem key="next" onAction={(key) => setUI(key)}>next</DropdownItem>
                                <DropdownItem key="mantine" onAction={(key) => setUI(key)}>mantine</DropdownItem>
                                <DropdownItem key="daisy" onAction={(key) => setUI(key)}>
                                daisy
                                </DropdownItem>
                                <DropdownItem key="shadcn" onAction={(key) => setUI(key)}>
                                shadcn
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>

                <div className='mt-4 flex'> 
                    <div className='w-64 h-96 mr-8'>
                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-0 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Daily Mix</p>
                            <small className="text-default-500">12 Tracks</small>
                            <h4 className="font-bold text-large">Frontend Radio</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}
                            />
                        </CardBody>
                        <div className="flex gap-4 px-4">
                            <Chip color="default">技术</Chip>
                            <Chip color="primary">后端</Chip>
                        </div> 
                        <CardFooter className="gap-3">
                        <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">4</p>
                        <p className=" text-default-400 text-small">Following</p>
                        </div>
                        <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">97.1K</p>
                        <p className="text-default-400 text-small">Followers</p>
                        </div>
                    </CardFooter>
                        </Card>
                    </div>
                    <div className='w-64 h-96 mr-8'>
                    <Card
                        isFooterBlurred
                        radius="lg"
                        className="border-none"
                        >
                        <Image
                            alt="Woman listing to music"
                            className="object-cover"
                            height={400}
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-white/80">收藏于：1年前</p>
                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onPress={onOpen}>
                                编辑
                            </Button>
                        </CardFooter>
                        </Card>
                    </div>
                </div>
                </div>
            </div>
           
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                        </p>
                        <p>
                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                        Action
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    )
  }
  
  export default NextuiDemo