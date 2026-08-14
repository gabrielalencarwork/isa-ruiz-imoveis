/* ==========================================
   ISA RUIZ — WIZARD QUALIFICATION FORM JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initWizardForm();
});

function initWizardForm() {
  const wizardCard = document.getElementById('wizardCard');
  if (!wizardCard) return;

  let currentStep = 1;
  const totalSteps = 5;

  const prevBtn = document.getElementById('prevStepBtn');
  const nextBtn = document.getElementById('nextStepBtn');
  const submitBtn = document.getElementById('submitWizardBtn');
  const progressBar = document.getElementById('progressBarFill');

  // Option box selection handler
  const optionBoxes = document.querySelectorAll('.option-box');
  optionBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const radio = box.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        const stepContent = box.closest('.wizard-step-content');
        stepContent.querySelectorAll('.option-box').forEach(b => b.classList.remove('selected'));
        box.classList.add('selected');
      }
    });
  });

  // Navigation handlers
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
          currentStep++;
          updateWizardUI();
        }
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateStep(5)) {
        sendQualificationToWhatsApp();
      }
    });
  }

  function validateStep(step) {
    const activeStepEl = document.getElementById(`step-${step}`);
    if (!activeStepEl) return true;

    if (step <= 4) {
      const checkedInput = activeStepEl.querySelector('input[type="radio"]:checked');
      if (!checkedInput) {
        alert('Por favor, selecione uma das opções para continuar.');
        return false;
      }
    } else if (step === 5) {
      const name = document.getElementById('wizName');
      const phone = document.getElementById('wizPhone');
      if (!name || !name.value.trim()) {
        alert('Por favor, informe seu nome completo.');
        name.focus();
        return false;
      }
      if (!phone || !phone.value.trim()) {
        alert('Por favor, informe seu WhatsApp.');
        phone.focus();
        return false;
      }
    }
    return true;
  }

  function updateWizardUI() {
    const progressPercent = (currentStep / totalSteps) * 100;
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    for (let i = 1; i <= totalSteps; i++) {
      const stepEl = document.getElementById(`step-${i}`);
      const stepIndicator = document.getElementById(`step-indicator-${i}`);

      if (stepEl) {
        if (i === currentStep) {
          stepEl.classList.add('active');
        } else {
          stepEl.classList.remove('active');
        }
      }

      if (stepIndicator) {
        if (i === currentStep) {
          stepIndicator.classList.add('active');
          stepIndicator.classList.remove('completed');
        } else if (i < currentStep) {
          stepIndicator.classList.add('completed');
          stepIndicator.classList.remove('active');
        } else {
          stepIndicator.classList.remove('active', 'completed');
        }
      }
    }

    if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-flex';
    if (nextBtn) nextBtn.style.display = currentStep === totalSteps ? 'none' : 'inline-flex';
    if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'inline-flex' : 'none';
  }

  function sendQualificationToWhatsApp() {
    const objetivo = getCheckedValue('objetivo') || 'Não informado';
    const tipo = getCheckedValue('tipoImovel') || 'Não informado';
    const orcamento = getCheckedValue('orcamento') || 'Não informado';
    const regiao = getCheckedValue('regiao') || 'Não informado';

    const name = document.getElementById('wizName')?.value || 'Cliente';
    const phone = document.getElementById('wizPhone')?.value || '';
    const email = document.getElementById('wizEmail')?.value || 'Não informado';
    const msg = document.getElementById('wizMsg')?.value || '';

    const text = `Olá, Isa Ruiz! Preenchi o formulário de atendimento no site:\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `📧 *E-mail:* ${email}\n\n` +
      `🎯 *Objetivo:* ${objetivo}\n` +
      `🏠 *Tipo de Imóvel:* ${tipo}\n` +
      `💰 *Faixa de Orçamento:* ${orcamento}\n` +
      `📍 *Região de Interesse (Araçatuba/SP):* ${regiao}\n` +
      (msg ? `📝 *Observação:* ${msg}\n` : '') +
      `\nGostaria de receber o atendimento personalizado.`;

    const encodedText = encodeURIComponent(text);
    const waNumber = '5518991091483';
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
  }

  function getCheckedValue(name) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : '';
  }

  updateWizardUI();
}
