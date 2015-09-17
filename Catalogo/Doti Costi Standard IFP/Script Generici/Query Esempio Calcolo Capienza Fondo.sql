
select nvl(sum(to_number(DAT_VL, '999999999999999999999.9999999999999999999999999')),0) as IMPORTO_EROGATO"
  from ag_sm_data_entries data_entries
  where
   dat_pth = 'SintesiServizi_TotaleImporti_LineaA'
   and fk_id in
   (
   select sm_id  FROM ag_sm_instances inst
  WHERE
    inst.sm_tmpl_dn = 'Dote Apprendistato art 3'
      and  inst.current_state in ('1629519c9d5f43d1bc8b6b036f4a4a8e','4a8eb456b84549a895bd0e87a59e0b67')   
   )
