import { useState } from "react"

const Section = ({ title, desc, toggle, handle }) => {
    console.log(handle);
    return (
        <div className="border border-black p-2 m-2">
            <div className="flex justify-between">
                <div className="font-bold">{title}</div>
                <button className="text-2xl font-bold" onClick={() => handle()}>{toggle ? "-" : "+"}</button>
            </div>
            {toggle && <div>{desc}</div>}
        </div>
    )
}

const Instamart = () => {
    const [toggle, setToggle] = useState("")


    return (
        <div>
            <Section
                toggle={toggle === "about"} //true 
                handle={() => setToggle((el) => {
                    return el === "about" ? "" : "about"
                })}

                // handle={() => setToggle((el) => el = "about")}

                title={"About Instamart"}
                desc={`On the other hand, we denounce with righteous indignation and dislike men who are 
                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, 
                that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs 
                to those who fail in their duty through weakness of will, which is the same as saying through 
                shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. 
                In a free hour, when our power of choice is untrammelled and when nothing prevents our being 
                able to do what we like best, every pleasure is to be welcomed and every pain avoided. 
                But in certain circumstances and owing to the claims of duty or the obligations of business it 
                will frequently occur that pleasures have to be repudiated and annoyances accepted. 
                The wise man therefore always holds in these matters to this principle of selection: 
                he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse 
                pains`} />
            <Section
                toggle={toggle === "team"} //false "" === "team" 
                handle={(e) => setToggle((toggle) => {
                    return toggle === "team" ? "" : "team"
                })}
                title={"Team Instamart"}
                desc={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"} />
            <Section
                toggle={toggle === "careers"} //false "" === "careers"
                handle={(e) => setToggle((toggle) => {
                    return toggle === "careers" ? "" : "careers"
                })}
                title={"Careers Instamart"}
                desc={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"} />
        </div>
    )
}

export default Instamart