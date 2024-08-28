from Spotfire.Dxp.Application.Visuals import VisualTypeIdentifiers, LineChart


favorites=[Document.Properties["Favorite1"],Document.Properties["Favorite2"],Document.Properties["Favorite3"],Document.Properties["Favorite4"],Document.Properties["Favorite5"]]

kbpsKpis=["Kbps","PacketintHsIDlTp"]
userKpis=["Users","SpeechUUser"]
secondKpis=["s","PacketintHsUMHT"]
kbKpis=["kb","PacketintUTrafficvolume","PacketintHsUTrafficvolume","PacketintEulUTrafficvolume"]
exceptionUnitTypes=[kbpsKpis,userKpis,secondKpis,kbKpis]
engineerNames=["SpeechA","PacketintA","SpeechR","PacketintHsR","PacketintHsIDlTp","SpeechUUser","PacketintHsUMHT","PacketintUTrafficvolume","PacketintHsUTrafficvolume","PacketintEulUTrafficvolume","SpeechMIRATHO","SpeechMIRATHOGSMAR","SpeechMCSFBAR","AV"];
englishNames=["Speech Accessibility (Speech_A)","Data Accessibility (Packetint_A)","Speech Drop Rate (Speech_R)","HS Connection Drop Rate (PacketintHs_R)","Cell Throughput (PacketintHs_I_DlTp)","Speech Erlang (Speech_U_User)","Average Session Length for Data Connections (PacketintHs_U_MHT)","Total Traffic Volume (Packetint_U_Trafficvolume)","HS Traffic Volume (PacketintHs_U_Trafficvolume)","EUL Traffic Volume (PacketintEul_U_Trafficvolume)","Handover to GSM Success Rate for Speech (Speech_M_IRATHO)","Share of Speech Calls Handed Over to GSM (Speech_M_IRATHO_GSM_AR)","Share of Speech Call Orginating from CS Fall Back from LTE (Speech_M_CSFB_AR)","Cell Availability (AV)"];

def set_visualizations():
                for row in range(1,6):
                                index=translate_name(row);
                                for page in Document.Pages:
                                                if page.Title == "Favorites": 
                                                      rest_visualizations(row,index,page)                      
                                                                        
def rest_visualizations(row,index,page):
                for visualization in page.Visuals:
						if visualization.TypeId == VisualTypeIdentifiers.LineChart:
									if visualization.Title==englishNames[index]:
													setcell_and_enclosed_properties(row);
													setunit_type_properties(row);
													mark_for_aggregation(row);
													visualcontentobject = visualization.As[LineChart]();
													visualcontentobject.YAxis.Expression = '${'+str(engineerNames[index])+'}';

def setcell_and_enclosed_properties(i):
                Document.Properties["Favorite"+str(i)+"Enclosed"]='${'+favorites[i-1]+'}';
                #print ("Set Favorite"+str(i)+"Enclosed to: "+'${'+favorites[i-1]+'}');
                Document.Properties["Favorite"+str(i)+"CellLevel"]='${'+favorites[i-1]+'CellLevel}';
                #print ("Set Favorite"+str(i)+"CellLevel to: "+'${'+favorites[i-1]+'CellLevel}');
                

def setunit_type_properties(i):
                unittype="%";
                for kpiunittype in exceptionUnitTypes:
                                for kpi in kpiunittype:
                                                if kpi==favorites[i-1]:
                                                                unittype=kpiunittype[0];
                Document.Properties["Favorite"+str(i)+"UnitType"]=str(unittype);
                return;

def mark_for_aggregation(i):
                if (favorites[i-1] in kbpsKpis or favorites[i-1] in kbKpis):
                                Document.Properties["Favorite"+str(i)+"DataKPI"]='True';
                else:
                                Document.Properties["Favorite"+str(i)+"DataKPI"]='False';
                

def translate_name(i):
                j=0;
                index=0;
                while j< len(engineerNames):
                                if(Document.Properties["Favorite"+str(i)]==engineerNames[j]):
                                               
                                                Document.Properties["Favorite"+str(i)+"LongName"]=englishNames[j];
                                               
                                                index=j;
                                j+=1;
                return index;

set_visualizations();
