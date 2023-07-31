import { Flex, Image } from "@chakra-ui/react";
interface Props {
    data: {
        name: string,
        src: string
    }[]
}
const CpnListAvatar = ({ data }: Props) => {

    return (
        <Flex overflowX="scroll">
            {data.map((image) => {
                return (
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={image.src}
                        alt='Dan Abramov' />
                )

            })}
            {/* <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' /> */}
        </Flex>
    );
}

export default CpnListAvatar;