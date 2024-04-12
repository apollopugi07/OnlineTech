
$(document).ready(function() {

    var result;
    var mode_;
  
    //rectangle

    $('#rec-compute').on('click', function() {
  
      var length_ = $('#rec-length').val();
      var width_ = $('#rec-width').val();
      mode_ = $('#rec-mode').val();
  
      if (mode_ == 'Rec-Area') {
  
        result = length_ * width_;
  
  
      } else {
  
        result = (2 * length_) + (2 * width_);
  
      }
  
      $('#rec-result').val(result.toFixed(2));
  
    });
  
    $('#rec-mode').on('change', function() {
  
      mode_ = $('#rec-mode').val();
  
        if (mode_ == 'Rec-Area') {
  
          mode_ = 'Rectangle - Area';
  
        } else {
  
          mode_ = 'Rectangle - Perimeter';
  
        }
      
      $('#rec-legend').text(mode_);
  
    });

    //triangle

    $('#tri-compute').on('click', function() {
  
        var base_ = $('#tri-base').val();
        var height_ = $('#tri-height').val();
        var side1_ = Number($('#tri-side1').val());
        var side2_ = Number($('#tri-side2').val());
        var side3_ = Number($('#tri-side3').val());
        mode_ = $('#tri-mode').val();
    
        if (mode_ == 'Tri-Area') {
    
          result = 0.5 * base_ * height_;
    
    
        } else {
    
          result = side1_ + side2_ + side3_;
    
        }
    
        $('#tri-result').val(result.toFixed(2));
    
      });
    
      $('#tri-mode').on('change', function() {
    
        mode_ = $('#tri-mode').val();
    
          if (mode_ == 'Tri-Area') {
    
            mode_ = 'Triangle - Area';
            $('.per-container').hide() 
            $('.area-container').show() 
    
          } else {
    
            mode_ = 'Triangle - Perimeter';
            $('.per-container').show() 
            $('.area-container').hide() 

          }
        
        $('#tri-legend').text(mode_);
    
      });
  
      //circle

      $('#cir-compute').on('click', function() {
  
        var radius_ = $('#cir-radius').val();
        mode_ = $('#cir-mode').val();
    
        if (mode_ == 'Cir-Area') {
    
          result = Math.PI * radius_ * radius_;
    
    
        } else {
    
          result =  2* Math.PI  * radius_;
    
        }
    
        $('#cir-result').val(result.toFixed(2));
    
      });
    
      $('#cir-mode').on('change', function() {
    
        mode_ = $('#cir-mode').val();
    
          if (mode_ == 'Cir-Area') {
    
            mode_ = 'Circle - Area';
    
          } else {
    
            mode_ = 'Circle - Perimeter';
    
          }
        
        $('#cir-legend').text(mode_);
    
      });


  });
  