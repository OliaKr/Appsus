import { storageService } from '../../../services/async-storage.service.js'
// import {storageService} from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const MAIL_KEY = 'mailDB'

export const mailService = {
  query,
  get,
  save,
  remove,
  getDefaultFilter,
  sendMail,
  getCurrentUser

}

const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus'
}

const gEmails = [
  {
    "id": "e102",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "kim",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e103",
    "subject": "come visit me",
    "body": "come visit me at club hotel",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "danny",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e104",
    "subject": "whats up dude",
    "body": "how are you",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "liad",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e105",
    "subject": "Miss you!",
    "body": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "liad",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e106",
    "subject": "Miss you!",
    "body": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "idan",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e107",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "ram",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e108",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "tom",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e109",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "yahel",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e110",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "yahel",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e111",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "kim",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e112",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "kim",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e113",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "kim",
    "isOpen": false,
    "isTrash": false
  },
  {
    "id": "e114",
    "subject": "Miss you!",
    "body": "Would love to catch up sometimes",
    "isRead": false,
    "sentAt": 1551133930594,
    "star": false,
    "labels": [],
    "fromEmail": "momo@momo.com",
    "to": "user@appsus.com",
    "from": "kim",
    "isOpen": false,
    "isTrash": false
  }
]


function query(filterBy = getDefaultFilter) {
  return storageService.query(MAIL_KEY)
    .then(emails => {
      if (!emails || !emails.length)
        emails = gEmails
      utilService.saveToStorage(MAIL_KEY, emails)

      if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        emails = emails.filter(email => regex.test(email.from))

      }
      return emails
    })

}

function get(emailId) {
  return storageService.get(MAIL_KEY, emailId)

}

function save(email) {
  if (email.id) {
    return storageService.put(MAIL_KEY, email)
  } else {
    return storageService.post(MAIL_KEY, email)
  }
}

function remove(emailId) {
  return storageService.remove(MAIL_KEY, emailId)

}

function getDefaultFilter() {
  return { txt: '' }
}

function sendMail(to, subject, message) {
  let latestId = Number(gEmails[gEmails.length - 1].id.slice(1)) + 1;
  const mail = {
    "id": `e${latestId}`,
    "subject": subject,
    "body": message,
    "isRead": false,
    "sentAt": (new Date()).toDateString,
    "star": false,
    "labels": [],
    "fromEmail": loggedinUser.email,
    "to": to,
    "from": loggedinUser.fullname,
    "isOpen": false,
    "isTrash": false,
  }
  gEmails.push(mail);

  utilService.saveToStorage(MAIL_KEY, gEmails);
  console.log("saved mail");
}

function getCurrentUser() {
  return loggedinUser;
}







