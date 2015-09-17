
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

// ****************   Capienza Fondo per Operatore
Select sum(IMPORTO) from
(
  SELECT TO_NUMBER (IMPORTO.DAT_VL) as IMPORTO
  FROM
    (SELECT sm_id
    FROM ag_sm_instances inst
    WHERE inst.sm_tmpl_dn   = 'Doti IeFP DDF I anni'
    AND inst.current_state IN ('4a8eb456b84549a895bd0e87a59e0b67','1629519c9d5f43d1bc8b6b036f4a4a8e')
    ) I
  LEFT OUTER JOIN
    (SELECT FK_ID,
      DAT_VL
    FROM ag_sm_data_entries data_entries
    WHERE dat_pth = 'ServiziFormazione_ImportoTotaleCorsi'
    ) IMPORTO
  ON I.sm_id= IMPORTO.fk_id
  LEFT OUTER JOIN
    (SELECT FK_ID,
      DAT_VL
    FROM ag_sm_data_entries data_entries
    WHERE dat_pth = 'Richiedente_IdOperatore'
    ) ID_OPERATORE
  ON I.sm_id            = ID_OPERATORE.fk_id
  WHERE IMPORTO.dat_VL IS NOT NULL
  UNION ALL
  Select 0 as IMPORTO from dual
 )
 =========================================================
 " Select sum(IMPORTO) from 																																		"+
" (																																												"+
"   SELECT TO_NUMBER (IMPORTO.DAT_VL) as IMPORTO                                                                                          "+
"   FROM                                                                                                                                                                     "+
"     (SELECT sm_id                                                                                                                                                     "+
"     FROM ag_sm_instances inst                                                                                                                                   "+
"     WHERE inst.sm_tmpl_dn   = 'Doti IeFP DDF I anni'                                                                                                  "+
"     AND inst.current_state IN ('4a8eb456b84549a895bd0e87a59e0b67','1629519c9d5f43d1bc8b6b036f4a4a8e')               "+
"     ) I                                                                                                                                                                          "+
"   LEFT OUTER JOIN                                                                                                                                                   "+
"     (SELECT FK_ID,                                                                                                                                                    "+
"       DAT_VL                                                                                                                                                               "+
"     FROM ag_sm_data_entries data_entries                                                                                                                   "+
"     WHERE dat_pth = 'ServiziFormazione_ImportoTotaleCorsi'                                                                                        "+
"     ) IMPORTO                                                                                                                                                             "+
"   ON I.sm_id= IMPORTO.fk_id                                                                                                                                      "+
"   LEFT OUTER JOIN                                                                                                                                                    "+
"     (SELECT FK_ID,                                                                                                                                                     "+
"       DAT_VL                                                                                                                                                                "+
"     FROM ag_sm_data_entries data_entries                                                                                                                    "+
"     WHERE dat_pth = 'Richiedente_IdOperatore'                                                                                                             "+
"     ) ID_OPERATORE                                                                                                                                                   "+
"   ON I.sm_id            = ID_OPERATORE.fk_id                                                                                                                "+
"   WHERE IMPORTO.dat_VL IS NOT NULL                                                                                                                     "+
"   UNION ALL                                                                                                                                                                "+
"   Select 0 as IMPORTO from dual                                                                                                                                  "+
"  )                                                                                                                                                                                 "+
"                                                                                                                                                                                    "+
"                                                                                                                                                                                    "+
"                                                                                                                                                                                     "+
                                                                                                                                                                                    ";
