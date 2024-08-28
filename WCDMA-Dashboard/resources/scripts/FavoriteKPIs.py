from Spotfire.Dxp.Data import DataPropertyClass

KPIs = []
for d in Document.Data.Properties.GetProperties(DataPropertyClass.Document):
	if "Favorite" in d.Name:
		if(isinstance(d.Value, (int,long))):
			print(d.Value)
			KPIs.append(int(d.Value))
print KPIs