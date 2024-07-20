import {atom , selector} from "recoil"

export const messageAtom = atom({
    key:"messageAtom",
    default: 45
})

export const notificationAtom = atom({
    key:"notificationaAtom",
    default:19
})
export const jobsAtom = atom({
    key:"jobsAtom",
    default:9
})

export const  myNetworkAtom = atom({
    key:"myNetworkAtom",
    default:7
})

export const sumAllCountSelectorAtom =  selector({
    key:"sumAllCountSelectorAtom",
    get: ({get}) =>{
        const message = get(messageAtom);
        const network = get(myNetworkAtom);
        const job = get(jobsAtom);
        const notification = get(notificationAtom);
        return message+network+job+notification;
    }
})