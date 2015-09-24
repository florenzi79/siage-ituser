//onLoad
//Progetto_SeIncaricoEsterno
var isSoggettoEsterno = (values.get('Progetto_SeIncaricoEsterno') == 'true');
items.get('Progetto_IncNome').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncCognome').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncCF').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncTelefono').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncEmail').setHidden(!isSoggettoEsterno);
items.get('Progetto_RagioneSocialeIncaricato').setHidden(!isSoggettoEsterno);
items.get('Progetto_PIVAInc').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncNome').setRequired(isSoggettoEsterno);
items.get('Progetto_IncCognome').setRequired(isSoggettoEsterno);
items.get('Progetto_IncCF').setRequired(isSoggettoEsterno);
items.get('Progetto_IncTelefono').setRequired(isSoggettoEsterno);
items.get('Progetto_IncEmail').setRequired(isSoggettoEsterno);
items.get('Progetto_RagioneSocialeIncaricato').setRequired(isSoggettoEsterno);
items.get('Progetto_PIVAInc').setRequired(isSoggettoEsterno);

//Progetto_MezziPropri
if (values.get('QuadroEconomico[0].Dettagliocosti') === null) {
  values.put('QuadroEconomico[0].Dettagliocosti','Spese di personale');
  values.put('QuadroEconomico[1].Dettagliocosti','Spese per l’acquisto di beni strumentali materiali');
  values.put('QuadroEconomico[2].Dettagliocosti','Spese per l’acquisto di beni immateriali');
  values.put('QuadroEconomico[3].Dettagliocosti','Spese per le licenze di software');
  values.put('QuadroEconomico[4].Dettagliocosti','Spese per i servizi di consulenza o per servizi equivalenti e spese di comunicazione/promozione');
  values.put('QuadroEconomico[5].Dettagliocosti','Spese per l’affitto dei locali sede del Progetto finanziabile, fino ad un massimo di dodici mensilità di canone di locazione');
  values.put('QuadroEconomico[6].Dettagliocosti','Spese per le scorte');
  values.put('QuadroEconomico[7].Dettagliocosti','Spese generali forfettarie addizionali derivanti direttamente dal Progetto');
  values.put('QuadroEconomico[0].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[1].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[2].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[3].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[4].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[5].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[6].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[7].Progetto_ImportoVoceCosto',''+0);
}
var spesePersonale = 0;
var speseBeniStrumentali = 0;
var speseBeniImmateriali = 0;
var speseSoftware = 0;
var speseConsulenza = 0;
var speseAffitto = 0;
var speseScorte = 0;
var speseGenerali = 0;
var totaleSpese = 0;
var interventoFinanziario = 0;
var mezziPropri = 0;
if (!isEmpty('QuadroEconomico[0].Progetto_ImportoVoceCosto')) {
  spesePersonale = parseFloat(values.get('QuadroEconomico[0].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[1].Progetto_ImportoVoceCosto')) {
  speseBeniStrumentali = parseFloat(values.get('QuadroEconomico[1].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[2].Progetto_ImportoVoceCosto')) {
  speseBeniImmateriali = parseFloat(values.get('QuadroEconomico[2].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[3].Progetto_ImportoVoceCosto')) {
  speseSoftware = parseFloat(values.get('QuadroEconomico[3].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[4].Progetto_ImportoVoceCosto')) {
  speseConsulenza = parseFloat(values.get('QuadroEconomico[4].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[5].Progetto_ImportoVoceCosto')) {
  speseAffitto = parseFloat(values.get('QuadroEconomico[5].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[6].Progetto_ImportoVoceCosto')) {
  speseScorte = parseFloat(values.get('QuadroEconomico[6].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[7].Progetto_ImportoVoceCosto')) {
  speseGenerali = parseFloat(values.get('QuadroEconomico[7].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('Progetto_InterventoFin')) {
  interventoFinanziario = parseFloat(values.get('Progetto_InterventoFin'));
}
totaleSpese = spesePersonale + speseBeniStrumentali + speseBeniImmateriali + speseSoftware + speseConsulenza + speseAffitto + speseScorte + speseGenerali;
mezziPropri = totaleSpese - interventoFinanziario;
values.put('Progetto_ToTSpesa',''+totaleSpese.toFixed(2));
if (mezziPropri > 0) {
  values.put('Progetto_MezziPropri',''+mezziPropri.toFixed(2));
} else {
  values.put('Progetto_MezziPropri',''0);
}

//Progetto_NaturaCUP
setSelectNaturaCUP('Progetto_NaturaCUP');
if (!isEmpty('Progetto_NaturaCUP')) {
  items.get('Progetto_TipologiaCUP').setHidden(false);
  setSelectTipologiaCUP('Progetto_TipologiaCUP',values.get('Progetto_NaturaCUP'));
  if (!isEmpty('Progetto_TipologiaCUP')) {
    items.get('Progetto_SettoreCUP').setHidden(false);
    setSelectSettoreCUP('Progetto_SettoreCUP');
    if (!isEmpty('Progetto_SettoreCUP')) {
      items.get('Progetto_SottosettoreCUP').setHidden(false);
      setSelectSottosettoreCUP('Progetto_SottosettoreCUP',values.get('Progetto_SettoreCUP'));
      if (!isEmpty('Progetto_SottosettoreCUP')) {
        items.get('Progetto_CategoriaCUP').setHidden(false);
        setSelectCategoriaCUP('Progetto_CategoriaCUP',values.get('Progetto_SottosettoreCUP'));
        if (!isEmpty('Progetto_CategoriaCUP')) {
          items.get('Progetto_ProgrammazioneCUP').setHidden(false);
          setSelectStrumentoDiProgrammazione('Progetto_ProgrammazioneCUP');
          if (!isEmpty('Progetto_ProgrammazioneCUP')) {
            items.get('Progetto_FinalitaCUP').setHidden(false);
            setSelectFinalita('Progetto_FinalitaCUP');
            if (!isEmpty('Progetto_FinalitaCUP')) {
              items.get('Progetto_CoperturaFinCUP').setHidden(false);
              setSelectCoperturaFinanziaria('Progetto_CoperturaFinCUP');
            } else {
              items.get('Progetto_CoperturaFinCUP').setHidden(true);
            }
          } else {
            items.get('Progetto_FinalitaCUP').setHidden(true);
          }
        } else {
          items.get('Progetto_ProgrammazioneCUP').setHidden(true);
        }
      } else {
        items.get('Progetto_CategoriaCUP').setHidden(true);
      }
    } else {
      items.get('Progetto_SottosettoreCUP').setHidden(true);
    }
  } else {
    items.get('Progetto_SettoreCUP').setHidden(true);
  }
} else {
  items.get('Progetto_TipologiaCUP').setHidden(true);
}


//onChange
//Progetto_SeIncaricoEsterno
values.remove('Progetto_IncNome');
values.remove('Progetto_IncCognome');
values.remove('Progetto_IncCF');
values.remove('Progetto_IncTelefono');
values.remove('Progetto_IncEmail');
values.remove('Progetto_RagioneSocialeIncaricato');
values.remove('Progetto_PIVAInc');
var isSoggettoEsterno = (values.get('Progetto_SeIncaricoEsterno') == 'true');
items.get('Progetto_IncNome').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncCognome').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncCF').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncTelefono').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncEmail').setHidden(!isSoggettoEsterno);
items.get('Progetto_RagioneSocialeIncaricato').setHidden(!isSoggettoEsterno);
items.get('Progetto_PIVAInc').setHidden(!isSoggettoEsterno);
items.get('Progetto_IncNome').setRequired(isSoggettoEsterno);
items.get('Progetto_IncCognome').setRequired(isSoggettoEsterno);
items.get('Progetto_IncCF').setRequired(isSoggettoEsterno);
items.get('Progetto_IncTelefono').setRequired(isSoggettoEsterno);
items.get('Progetto_IncEmail').setRequired(isSoggettoEsterno);
items.get('Progetto_RagioneSocialeIncaricato').setRequired(isSoggettoEsterno);
items.get('Progetto_PIVAInc').setRequired(isSoggettoEsterno);

//Progetto_Condizioni
if ((values.get('Progetto_Condizioni[0]') == 'false') || (values.get('Progetto_Condizioni[1]') == 'false') || (values.get('Progetto_Condizioni[2]') == 'false') || (values.get('Progetto_Condizioni[3]') == 'false')) {
  clearModule('Progetto_Condizioni');
  values.put('Progetto_Condizioni[0]','false');
}

//Progetto_InterventoFin
if (values.get('QuadroEconomico[0].Dettagliocosti') === null) {
  values.put('QuadroEconomico[0].Dettagliocosti','Spese di personale');
  values.put('QuadroEconomico[1].Dettagliocosti','Spese per l’acquisto di beni strumentali materiali');
  values.put('QuadroEconomico[2].Dettagliocosti','Spese per l’acquisto di beni immateriali');
  values.put('QuadroEconomico[3].Dettagliocosti','Spese per le licenze di software');
  values.put('QuadroEconomico[4].Dettagliocosti','Spese per i servizi di consulenza o per servizi equivalenti e spese di comunicazione/promozione');
  values.put('QuadroEconomico[5].Dettagliocosti','Spese per l’affitto dei locali sede del Progetto finanziabile, fino ad un massimo di dodici mensilità di canone di locazione');
  values.put('QuadroEconomico[6].Dettagliocosti','Spese per le scorte');
  values.put('QuadroEconomico[7].Dettagliocosti','Spese generali forfettarie addizionali derivanti direttamente dal Progetto');
  values.put('QuadroEconomico[0].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[1].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[2].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[3].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[4].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[5].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[6].Progetto_ImportoVoceCosto',''+0);
  values.put('QuadroEconomico[7].Progetto_ImportoVoceCosto',''+0);
}
var spesePersonale = 0;
var speseBeniStrumentali = 0;
var speseBeniImmateriali = 0;
var speseSoftware = 0;
var speseConsulenza = 0;
var speseAffitto = 0;
var speseScorte = 0;
var speseGenerali = 0;
var totaleSpese = 0;
var interventoFinanziario = 0;
var mezziPropri = 0;
if (!isEmpty('QuadroEconomico[0].Progetto_ImportoVoceCosto')) {
  spesePersonale = parseFloat(values.get('QuadroEconomico[0].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[1].Progetto_ImportoVoceCosto')) {
  speseBeniStrumentali = parseFloat(values.get('QuadroEconomico[1].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[2].Progetto_ImportoVoceCosto')) {
  speseBeniImmateriali = parseFloat(values.get('QuadroEconomico[2].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[3].Progetto_ImportoVoceCosto')) {
  speseSoftware = parseFloat(values.get('QuadroEconomico[3].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[4].Progetto_ImportoVoceCosto')) {
  speseConsulenza = parseFloat(values.get('QuadroEconomico[4].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[5].Progetto_ImportoVoceCosto')) {
  speseAffitto = parseFloat(values.get('QuadroEconomico[5].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[6].Progetto_ImportoVoceCosto')) {
  speseScorte = parseFloat(values.get('QuadroEconomico[6].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('QuadroEconomico[7].Progetto_ImportoVoceCosto')) {
  speseGenerali = parseFloat(values.get('QuadroEconomico[7].Progetto_ImportoVoceCosto'));
}
if (!isEmpty('Progetto_InterventoFin')) {
  interventoFinanziario = parseFloat(values.get('Progetto_InterventoFin'));
}
totaleSpese = spesePersonale + speseBeniStrumentali + speseBeniImmateriali + speseSoftware + speseConsulenza + speseAffitto + speseScorte + speseGenerali;
mezziPropri = totaleSpese - interventoFinanziario;
values.put('Progetto_ToTSpesa',''+totaleSpese.toFixed(2));
if (mezziPropri > 0) {
  values.put('Progetto_MezziPropri',''+mezziPropri.toFixed(2));
} else {
  values.put('Progetto_MezziPropri',''0);
}
//Progetto_NaturaCUP
values.remove('Progetto_TipologiaCUP');
values.remove('Progetto_SettoreCUP');
values.remove('Progetto_SottosettoreCUP');
values.remove('Progetto_CategoriaCUP');
values.remove('Progetto_ProgrammazioneCUP');
values.remove('Progetto_FinalitaCUP');
clearModule('Progetto_CoperturaFinCUP');
if (!isEmpty('Progetto_NaturaCUP')) {
  items.get('Progetto_TipologiaCUP').setHidden(false);
  setSelectTipologiaCUP('Progetto_TipologiaCUP',values.get('Progetto_NaturaCUP'));
} else {
  items.get('Progetto_TipologiaCUP').setHidden(true);
}
items.get('Progetto_CoperturaFinCUP').setHidden(true);
items.get('Progetto_FinalitaCUP').setHidden(true);
items.get('Progetto_ProgrammazioneCUP').setHidden(true);
items.get('Progetto_CategoriaCUP').setHidden(true);
items.get('Progetto_SottosettoreCUP').setHidden(true);
items.get('Progetto_SettoreCUP').setHidden(true);
//Progetto_TipologiaCUP
values.remove('Progetto_SettoreCUP');
values.remove('Progetto_SottosettoreCUP');
values.remove('Progetto_CategoriaCUP');
values.remove('Progetto_ProgrammazioneCUP');
values.remove('Progetto_FinalitaCUP');
clearModule('Progetto_CoperturaFinCUP');
if (!isEmpty('Progetto_TipologiaCUP')) {
  items.get('Progetto_SettoreCUP').setHidden(false);
  setSelectSettoreCUP('Progetto_SettoreCUP');
} else {
  items.get('Progetto_SettoreCUP').setHidden(true);
}
items.get('Progetto_CoperturaFinCUP').setHidden(true);
items.get('Progetto_FinalitaCUP').setHidden(true);
items.get('Progetto_ProgrammazioneCUP').setHidden(true);
items.get('Progetto_CategoriaCUP').setHidden(true);
items.get('Progetto_SottosettoreCUP').setHidden(true);
//Progetto_SettoreCUP
values.remove('Progetto_SottosettoreCUP');
values.remove('Progetto_CategoriaCUP');
values.remove('Progetto_ProgrammazioneCUP');
values.remove('Progetto_FinalitaCUP');
clearModule('Progetto_CoperturaFinCUP');
if (!isEmpty('Progetto_SettoreCUP')) {
  items.get('Progetto_SettoreCUP').setHidden(false);
  setSelectSottosettoreCUP('Progetto_SottosettoreCUP',values.get('Progetto_SettoreCUP'));
} else {
  items.get('Progetto_SottosettoreCUP').setHidden(true);
}
items.get('Progetto_CoperturaFinCUP').setHidden(true);
items.get('Progetto_FinalitaCUP').setHidden(true);
items.get('Progetto_ProgrammazioneCUP').setHidden(true);
items.get('Progetto_CategoriaCUP').setHidden(true);
//Progetto_SottosettoreCUP
values.remove('Progetto_CategoriaCUP');
values.remove('Progetto_ProgrammazioneCUP');
values.remove('Progetto_FinalitaCUP');
clearModule('Progetto_CoperturaFinCUP');
if (!isEmpty('Progetto_SottosettoreCUP')) {
  items.get('Progetto_CategoriaCUP').setHidden(false);
  setSelectCategoriaCUP('Progetto_CategoriaCUP',values.get('Progetto_SottosettoreCUP'));
} else {
  items.get('Progetto_CategoriaCUP').setHidden(true);
}
items.get('Progetto_CoperturaFinCUP').setHidden(true);
items.get('Progetto_FinalitaCUP').setHidden(true);
items.get('Progetto_ProgrammazioneCUP').setHidden(true);
//Progetto_CategoriaCUP
values.remove('Progetto_ProgrammazioneCUP');
values.remove('Progetto_FinalitaCUP');
clearModule('Progetto_CoperturaFinCUP');
if (!isEmpty('Progetto_CategoriaCUP')) {
  items.get('Progetto_ProgrammazioneCUP').setHidden(false);
  setSelectCategoriaCUP('Progetto_ProgrammazioneCUP');
} else {
  items.get('Progetto_ProgrammazioneCUP').setHidden(true);
}
items.get('Progetto_CoperturaFinCUP').setHidden(true);
items.get('Progetto_FinalitaCUP').setHidden(true);
//Progetto_ProgrammazioneCUP
values.remove('Progetto_FinalitaCUP');
clearModule('Progetto_CoperturaFinCUP');
if (!isEmpty('Progetto_ProgrammazioneCUP')) {
  items.get('Progetto_FinalitaCUP').setHidden(false);
  setSelectCategoriaCUP('Progetto_FinalitaCUP');
} else {
  items.get('Progetto_FinalitaCUP').setHidden(true);
}
items.get('Progetto_CoperturaFinCUP').setHidden(true);
//Progetto_FinalitaCUP
clearModule('Progetto_CoperturaFinCUP');
if (!isEmpty('Progetto_FinalitaCUP')) {
  items.get('Progetto_CoperturaFinCUP').setHidden(false);
  setSelectCategoriaCUP('Progetto_CoperturaFinCUP');
} else {
  items.get('Progetto_CoperturaFinCUP').setHidden(true);
}


//validazione



//operations
