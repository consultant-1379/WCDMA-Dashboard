from Spotfire.Dxp.Data import DataPropertyClass

for Page in Document.Pages:
    
    if Page.Title == TargetPage.replace("&","and"):

        Document.ActivePageReference = Page
        break



for d in Document.Data.Properties.GetProperties(DataPropertyClass.Document):
    if "PlayPause" in d.Name:
        d.Value = "Pause"
        break
