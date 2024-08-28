from Spotfire.Dxp.Data import DataPropertyClass

for i in range(0,6):
	if Document.Pages[i].Title == Document.ActivePageReference.Title:
		pageNum = i
		if(Document.ActivePageReference.Title=="Start"):
			for d in Document.Data.Properties.GetProperties(DataPropertyClass.Document):
				if "PlayPause" in d.Name:
					d.Value = "Play"

for d in Document.Data.Properties.GetProperties(DataPropertyClass.Document):
	if "FavPages" in d.Name:
		pageNums = []
		for j in d.Value:
			pageNums.append(int(j))
			pageNums.sort()

for l in range(0, len(pageNums)):
	k = pageNums[l]
	if pageNums[len(pageNums) - 1] <= pageNum:
		Document.ActivePageReference = Document.Pages[int(k)]
		break
	elif k == pageNum:
		Document.ActivePageReference = Document.Pages[pageNums[l+1]]
		break
	else:
		Document.ActivePageReference = Document.Pages[int(k)]
