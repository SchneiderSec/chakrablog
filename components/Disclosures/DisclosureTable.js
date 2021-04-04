import { Table, Th, Thead, Tr, Tbody } from "@chakra-ui/table";
import DisclosureRow from "./DisclosureRow";
import CVEs from './cves.json';
import { useColorModeValue } from "@chakra-ui/color-mode";

/*

*/
export default function DisclosureTable(){
    return(
        <Table variant="striped" colorScheme={useColorModeValue("blackAlpha", "gray")}>
            <Thead>
                <Tr>
                    <Th>Vulnerability Title</Th>
                    <Th>CVE</Th>
                    <Th>Vendor</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    CVEs.map( (cve, idx) => (
                        <DisclosureRow 
                        title={cve.title} 
                        vendor={cve.vendor} 
                        cve={cve.cve}
                        link="N/A"
                        key={idx}
                        />

                    ))
                }
            </Tbody>
        </Table>
    )
}