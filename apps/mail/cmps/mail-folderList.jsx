
export function MailFolderList({ filterFunction }) {

    return <div className="mail-folder-list">

        <ul>
            <li onClick={() => filterFunction("inbox")} >
                <i className="fa-solid fa-inbox"></i>
                Inbox
            </li>
            
            <li onClick={() => filterFunction("read")}>
                <i className="fa-regular fa-bookmark"></i>
                Read
            </li>

            <li onClick={() => filterFunction("unread")}>
                <i className="fa-solid fa-bookmark"></i>
                Unerad
            </li>

            <li onClick={() => filterFunction("sent")}>
                <i className="fa-solid fa-paper-plane"></i>
                Sent
            </li>

            <li onClick={() => filterFunction("trash")}>
                <i className="fa-solid fa-trash-can"></i>
                Trash
            </li>
            <li onClick={() => filterFunction("star")}>
                <i className="fa-regular fa-star"></i>
                Starred
            </li>
            


        </ul>
    </div>

}

