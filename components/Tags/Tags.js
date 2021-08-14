import { Badge } from "@chakra-ui/react";

const Tags = ({ type }) => {

    const COLOR_SCHEME = {
        'php': 'pink',
        'java': 'yellow',
        'c#': 'blue',
        'cpp': 'blue',
        'writeup': 'purple',
        'code review': 'teal'
    }

    return (
        <Badge colorScheme={COLOR_SCHEME[type]} ml="2" padding="1" mt="2">
            {type}
        </Badge>
    )
}
export default Tags;