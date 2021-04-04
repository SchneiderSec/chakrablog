import { Tr, Td } from "@chakra-ui/table";
import LinkContent from '../../layouts/LinkContent'

export default function DisclosureRow({ title, cve, link, vendor }){
    return(
            <Tr>
                <Td w="50%">{title}</Td>
                <Td w="40%" overflowX="auto">
                    <LinkContent to={`https://nvd.nist.gov/vuln/detail/${cve}`} isExternal>
                        {cve}
                    </LinkContent>
                </Td>
                <Td w="10%">{vendor}</Td>
            </Tr>
    )
}