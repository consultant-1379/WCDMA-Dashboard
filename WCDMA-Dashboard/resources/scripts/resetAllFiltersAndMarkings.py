from Spotfire.Dxp.Data import RowSelection,IndexSet


def reset_marking_and_filtering():

	
	for datatable in Document.Data.Tables:

		
		for marking in Document.Data.Markings:

			
			rows = RowSelection(IndexSet(datatable.RowCount, False))
			marking.SetSelection(rows, datatable)
	
	
	for filterscheme in Document.FilteringSchemes:

		
		filterscheme.ResetAllFilters()


reset_marking_and_filtering()
