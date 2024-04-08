import { Input,
    Avatar,
    Breadcrumbs,
    Anchor,
    Menu, Button, Text, rem,Modal,
    Card, Image, Badge, Group



} from '@mantine/core';
import { HamburgerIcon, SearchIcon, StarIcon, SunIcon, ChevronRightIcon, ViewIcon, EditIcon, ChevronDownIcon} from '@chakra-ui/icons'
import { useDisclosure } from '@mantine/hooks';

function MantineDemo({setUI}) {
    const [opened, { open, close }] = useDisclosure(false);
    const items = [
        { title: 'Mantine', href: '#' },
        { title: 'Mantine hooks', href: '#' },
        { title: 'use-id', href: '#' },
      ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));

    return (
        <div>
           <div className='h-14 shadow-md flex items-center px-4' >
                <HamburgerIcon w={6} h={6}/>
                <div className='ml-4'>我的收藏 </div>
                <div className='flex-1 mx-8'>
                    <Input placeholder="请输入搜索内容" />
                </div>
                <div>
                <Avatar src="https://bit.ly/dan-abramov" alt="it's me" />
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
                <Breadcrumbs>{items}</Breadcrumbs>
                        <div>
                           <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <Button>UI切换</Button>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Label>切换皮肤</Menu.Label>
                                <Menu.Item onClick={() => setUI('chakra')}>
                                chakra
                                </Menu.Item>
                                <Menu.Item onClick={() => setUI('next')}>
                                next
                                </Menu.Item>
                                <Menu.Item onClick={() => setUI('mantine')}>
                                mantine
                                </Menu.Item>
                                <Menu.Item onClick={() => setUI('daisy')}>
                                daisy
                                </Menu.Item>
                                <Menu.Item onClick={() => setUI('shadcn')}>
                                shadcn
                                </Menu.Item>
                            </Menu.Dropdown>
                            </Menu>
                        </div>
                        
                    </div>
                    <div className='mt-4 flex'><div className='w-64 h-96 mr-8'>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        height={160}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Norway Fjord Adventures</Text>
                        <Badge color="pink">On Sale</Badge>
                    </Group>

                    <Text size="sm" c="dimmed">
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                        activities on and around the fjords of Norway
                    </Text>

                    <Button color="blue" fullWidth mt="md" radius="md" onClick={open}>
                        打开弹框
                    </Button>
                    </Card>
                    </div> </div>
            </div>
            </div>
            <Modal opened={opened} onClose={close} title="Authentication">
            <Text>Paper is the most basic ui component</Text>
                <Text>
                    Use it to create cards, dropdowns, modals and other components that require background
                    with shadow
                </Text>
                </Modal>
        </div>
    )
  }
  
  export default MantineDemo