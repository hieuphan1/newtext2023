import React, { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

interface Props {
    totalStars: number,
    defaultRating?: number
}

const CpnRating = ({ totalStars, defaultRating = 1 }: Props) => {
    const [rating, setRating] = useState<number>(defaultRating || 1);
    const [isSubmit, setIsSubmit] = useState(false);
    const handleStarClick = (selectedRating: number) => {
        setRating(selectedRating);
    };
    const list: Array<number> = [];
    for (let i = 1; i <= totalStars; i++) {
        list.push(i);
    }

    const handleSubmit = () => {
        setIsSubmit(!isSubmit);
    }

    const renderStars = () => {
        if (isSubmit) {
            return (<h1>Thanks</h1>)
        }
        return (
            <>
                {
                    list.map((item) => {
                        return (
                            <StarIcon
                                color={rating < item ? "gray" : "yellow.300"}
                                onClick={() => handleStarClick(item)}
                            />
                        )
                    })
                }</>)

    }

    return (
        <Flex align="center">
            {/* {!isSubmit ? list.map((item) => {
                return (
                    <StarIcon
                        color={rating < item ? "gray" : "yellow.300"}
                        onClick={() => handleStarClick(item)}
                    />
                )
            }) : <h1>Thanks</h1>} */}
            {renderStars()}
            <p>&emsp;Selected Rating: {rating} &emsp;</p>
            <Button onClick={handleSubmit}>Submit</Button>
        </Flex>
    );
};

export default CpnRating;
