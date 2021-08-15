import DisclosureTable from "../components/Disclosures/DisclosureTable";
import PageLayout from "../components/layouts/PageLayout";
import TextContent from "../layouts/TextContent";


export default function Contact(){
    return(
        <PageLayout heading="Disclosures" description="All reported and disclosed vulnerabilities identified by SchneiderSec. This  includes vendors like Cisco, VMWare, Pi-Hole, etc..">
            <DisclosureTable />
        </PageLayout>
    )
}