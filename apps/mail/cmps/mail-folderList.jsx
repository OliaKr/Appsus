
export function MailFolderList({filterFunction}) {

    return <div className="mail-folder-list">

        <ul>
            <li onClick={()=>filterFunction("inbox")} >
                Inbox
            </li>
            <li onClick={()=>filterFunction("read")}>  
           
                Read
            </li>

            <li onClick={()=>filterFunction("unread")}>
                Unerad
            </li>

            <li onClick={()=>filterFunction("sent")}>
                Sent
            </li>

            <li onClick={()=>filterFunction("trash")}>
                Trash
            </li>

            <li >
                Starred
            </li>

        </ul>
    </div>
  
}