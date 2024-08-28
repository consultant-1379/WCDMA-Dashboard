a=" (kb)"
if(Document.Properties["QosKPIName"]=="([pmSumAckedBitsRlim])/(0.002 * ([pmSumTransmissionsRlim]))"):
	Document.Properties["QoSUnitType"]=a
else:
	Document.Properties["QoSUnitType"]=" (%)"
	
if(Document.Properties["UtilizationKPIName"]=="[pmSumEulRlcUserPacketThp]/10" or Document.Properties["UtilizationKPIName"]=="[pmSumDchDlRlcTotPacketThp]/2 + [pmSumHsDlRlcUserPacketThp]/10 + [pmSumDchUlRlcTotPacketThp]/2 + [pmSumEulRlcUserPacketThp]/10") or Document.Properties["UtilizationKPIName"]=="[pmSumHsDlRlcUserPacketThp]/10":
	Document.Properties["UtilizationUnitType"]=a
elif(Document.Properties["UtilizationKPIName"]=="900 * max(pm_count) *(([pmSumHsConnServ] / [pmSamplesHsConnServ]) / ([pmNormalReleaseHsConn] + [pmSystemReleaseHsConn] + [pmNormalRelMultiHsConnToSpeech] + [pmSystemRelMultiHsConnToSpeech] + [pmReconfSuccOrigHsConn]))"): 
	Document.Properties["UtilizationUnitType"]=" (s)"
else:
	Document.Properties["UtilizationUnitType"]=" "


if(Document.Properties["FavoriteKPINames"]=="[pmSumEulRlcUserPacketThp]/10" or Document.Properties["UtilizationKPIName"]=="[pmSumDchDlRlcTotPacketThp]/2 + [pmSumHsDlRlcUserPacketThp]/10 + [pmSumDchUlRlcTotPacketThp]/2 + [pmSumEulRlcUserPacketThp]/10") or Document.Properties["UtilizationKPIName"]=="[pmSumHsDlRlcUserPacketThp]/10":
	Document.Properties["FavoritesUnitType"]=a
elif(Document.Properties["FavoriteKPINames"]=="900 * max(pm_count) *(([pmSumHsConnServ] / [pmSamplesHsConnServ]) / ([pmNormalReleaseHsConn] + [pmSystemReleaseHsConn] + [pmNormalRelMultiHsConnToSpeech] + [pmSystemRelMultiHsConnToSpeech] + [pmReconfSuccOrigHsConn]))"): 
	Document.Properties["FavoritesUnitType"]=" (s)"
else:
	Document.Properties["FavoritesUnitType"]=" (%)"
