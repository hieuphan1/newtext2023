import { Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';
import CpnDivider from './CpnDivider';
interface Props {
    dataTab: {
        id: number;
        name: string;
        content?: React.ReactNode;
    }[],

}
const CpnTabs = ({ dataTab }: Props) => {
    const [tab, setTab] = useState(1);
    const [content, setContent] = useState<React.ReactNode>(dataTab[0]?.content);

    const hanleClick = (index: number, content: React.ReactNode) => {
        setTab(index)
        setContent(content)
    }

    return (
        <Flex direction="column">
            <Flex>
                {dataTab.map((item) => {

                    return (
                        <Flex>
                            {/* <Button onClick={() => { hanleClick(item.id) }} colorScheme={tab === item.id ? "blue" : "gray"} isActive={tab === item.id}>{item.name}</Button> */}
                            <Button onClick={() => { hanleClick(item.id, item.content) }} colorScheme={tab === item.id ? "blue" : "gray"}>{item.name}</Button>
                            {/* {tab === item.id && (<p>{item.content}</p>)} */}
                        </Flex>
                    )
                })}
            </Flex>
            <CpnDivider />
            <Flex height='sm' width={1350} border='1px' borderColor='gray.300'>{content}</Flex>
        </Flex >
    );
}

export default CpnTabs;