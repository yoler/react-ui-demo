import { 
    InputGroup, 
    InputLeftElement, 
    Input, 
    InputRightElement, 
    Button,
    Text,
    WrapItem, 
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Card,
    CardBody,
    Image,
    CardFooter,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack,
    Badge,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon, StarIcon, SunIcon, ChevronRightIcon, ViewIcon, EditIcon, ChevronDownIcon} from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'

function ChakraDemo({ setUI }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
           <div className='h-14 shadow-md flex items-center px-4' >
                <HamburgerIcon w={6} h={6}/>
                <div className='ml-4'><Text fontSize='md'>我的收藏</Text> </div>
                <div className='flex-1 mx-8'>
                    <InputGroup size='md'>
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input type='tel' placeholder='请输入搜索内容' pr='4rem' />
                        <InputRightElement width='4rem'>
                            <Button h='1.75rem' size='sm'>
                                搜索
                            </Button>
                        </InputRightElement>
                    
                    </InputGroup>
                </div>
                <div>
                    <WrapItem>
                        <Avatar name='Yoler' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
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
                        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>技术</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>前端</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>前端 UI 库</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="mr-4">
                                    UI切换
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => setUI('chakra')}>chakra</MenuItem>
                                    <MenuItem onClick={() => setUI('next')}>next</MenuItem>
                                    <MenuItem onClick={() => setUI('mantine')}>mantine</MenuItem>
                                    <MenuItem onClick={() => setUI('daisy')}>daisy</MenuItem>
                                    <MenuItem onClick={() => setUI('shadcn')}>shadcn</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                    卡片模式
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>列表模式</MenuItem>
                                    <MenuItem>极简模式</MenuItem>
                                    <MenuItem>瀑布模式</MenuItem>
                                    <MenuItem>高级模式</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                        
                    </div>
                    <div className='mt-4 flex'> 
                        <div className='w-64 h-96 mr-8'>
                             <Card >
                                <CardBody>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <Image
                                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                        alt='Green double couch with wooden legs'
                                    />
                                     <Stack direction='row' className='mx-2 mt-2'>
                                        <Badge>技术</Badge>
                                        <Badge colorScheme='green'>前端</Badge>
                                        <Badge colorScheme='red'>后端</Badge>
                                        <Badge colorScheme='purple'>UI</Badge>
                                    </Stack>
                                    <CardFooter
                                        justify='flex-end'
                                        flexWrap='wrap'
                                    >
                                        <EditIcon className='mr-4' onClick={onOpen}/>
                                        <ViewIcon />
                                    </CardFooter>
                            </Card>
                        </div>
                        <div className='w-64 h-96'>
                             <Card >
                                <CardBody>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <Image
                                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                        alt='Green double couch with wooden legs'
                                    />
                                    <Stack direction='row' className='mx-2 mt-2'>
                                        <Badge>技术</Badge>
                                        <Badge colorScheme='green'>前端</Badge>
                                        <Badge colorScheme='red'>后端</Badge>
                                        <Badge colorScheme='purple'>UI</Badge>
                                    </Stack>
                                    <CardFooter
                                        justify='flex-end'
                                        flexWrap='wrap'
                                    >
                                        <EditIcon className='mr-4' onClick={onOpen}/>
                                        <ViewIcon />
                                    </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div> 
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.

Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
       
    )
  }
  
  export default ChakraDemo