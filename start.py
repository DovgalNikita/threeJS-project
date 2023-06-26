import eel
import pymongo

db_client = pymongo.MongoClient('localhost', 27017)
current_db = db_client["medService"]

collection_users = current_db["users"]
collection_patients = current_db["patients"]
collection_status = current_db["status"]
collection_visits = current_db["visits"]

#Авторизация
@eel.expose
def usersAuthCheck(login , password):
    if collection_users.find_one({"login":login, "password":password}):
        return 1
    else:
        return 0

#Загрузка пациентов
@eel.expose
def patients_loader():
    patientsArr = []
    for patient in collection_patients.find():
        patientsArr.append(patient)
    return patientsArr

#Загрузка пациента в личную карточку
@eel.expose
def patient_loader(status_fio):
    return collection_patients.find_one({"fio":status_fio})

#Загрузка фокусируемого пациента
@eel.expose
def status_loader():
    return collection_status.find_one({"_id":0})

#Загрузка динамического пациента
@eel.expose
def status_update(individuals_fio):
    collection_status.update_one({"_id":0},{'$set':{"individuals_fio":individuals_fio}})

#Загрузка фокусируемого пациента
@eel.expose
def visits_loader(individuals_id):
    return collection_visits.find({"fio_id":individuals_id})


eel.init("")
eel.start("authorization.html", mode="Chrome")