import { ContactContainer } from "../sharableComp/ContactContainer";
import { ContactSidebar } from "../sharableComp/ContactSidebar";
export const Contact = () => {
    return (
        <>
            <section>
                <div className="w-full  flex flex-col md:flex-row">
                    <div className="w-full md:w-2/4 space-y-4 ">
                        <ContactSidebar />
                    </div>
                    <div className="w-full md:w-2/4 space-y-4">
                        <ContactContainer />
                    </div>
                </div>
            </section>
        </>
    );
}