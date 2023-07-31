import { Avatar, AvatarProps } from "@chakra-ui/react";

interface CpnAvatarProps extends AvatarProps {
    name?: string;
    src?: string
}
const avatar = [
    {
        name: "Oshigaki Kisame",
        src: 'https://picsum.photos/200/300'
    },
    {
        name: "Sasuke Uchiha",
        src: 'https://picsum.photos/200'
    },
    {
        name: "",
        src: 'https://picsum.photos/seed/picsum/200/300'
    },
];

const getRandomAvatar = () => {
    const randomAvatarIndex = Math.floor(Math.random() * avatar.length);
    // index 0 -> length -1
    // 1
    const randomAvatarSrc = avatar[randomAvatarIndex].src;
    return randomAvatarSrc
}

const CpnAvatar = ({ name, src, ...rest }: CpnAvatarProps) => {
    return (
        <Avatar name={name} src={src ? src : getRandomAvatar()} {...rest} />
    );
}

export default CpnAvatar;