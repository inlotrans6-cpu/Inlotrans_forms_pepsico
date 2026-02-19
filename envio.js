<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; line-height: 1.6;">
  
  <!-- Encabezado -->
  <div style="background: #001855; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h2 style="margin: 0; font-size: 20px;">📋 Nuevo Registro - Pepsico Funza</h2>
  </div>
  
  <!-- Cuerpo del mensaje -->
  <div style="padding: 20px; background: #f8f9fa;">
    
    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #dee2e6;">
      
      <!-- Fecha y Lugar -->
      <div style="margin-bottom: 15px;">
        <strong style="color: #001855;">📅 Fecha:</strong> {{fecha}}<br>
        <strong style="color: #001855;">📍 Lugar:</strong> {{lugar}}<br>
        <strong style="color: #001855;">🔄 Turno:</strong> {{turno}}
      </div>
      
      <!-- Línea divisoria -->
      <div style="border-top: 2px dashed #dee2e6; margin: 15px 0;"></div>
      
      <!-- Responsable -->
      <div style="margin-bottom: 15px;">
        <strong style="color: #001855;">👤 Responsable:</strong> {{respo_diligen}}
      </div>
      
      <!-- Línea divisoria -->
      <div style="border-top: 2px dashed #dee2e6; margin: 15px 0;"></div>
      
      <!-- Totales -->
      <div style="margin-bottom: 15px;">
        <strong style="color: #001855;">🚛 Total Vehículos:</strong> {{total_vehiculos}}<br>
        <strong style="color: #001855;">📦 Total Cajas:</strong> {{cajas_totales}}<br>
        <strong style="color: #001855;">👥 Total Personas:</strong> {{total_personas}}
      </div>
      
    </div>
    
    <!-- Pie de página -->
    <div style="margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px;">
      <p>Enviado automáticamente desde el sistema de registro Inlotrans S.A.S</p>
      <p>{{time}}</p>
    </div>
    
  </div>
</div>