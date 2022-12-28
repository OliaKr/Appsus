import { storageService } from '../../../services/async-storage.service.js'
import { utilServ } from '../../../services/util.service.js'

const MAIL_KEY = 'mailDB'

export const mailService = {
    


}

const loggedinUser = { 
    email: 'user@appsus.com', 
    fullname: 'Mahatma Appsus' }

const gEmail = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false, sentAt: 1551133930594,
    to: 'momo@momo.com'
}