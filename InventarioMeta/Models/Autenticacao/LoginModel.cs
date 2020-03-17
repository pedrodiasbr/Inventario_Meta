using System.ComponentModel.DataAnnotations;

namespace InventarioMeta.Models.Autenticacao
{
    public class LoginModel
    {
        
        public string UrlRetorno { get; set; }

        
        public string Token { get; set; }

        [Required(ErrorMessage = "Informe a senha")]
        [DataType(DataType.Password)]
        [MinLength(6, ErrorMessage = "A senha deve ter pelo menos 6 caracteres")]
        public string Senha { get; set; }

        [Required(ErrorMessage = "Confirme a senha")]
        [DataType(DataType.Password)]
        [Display(Name = "Confirmar senha")]
        [MinLength(6, ErrorMessage = "A senha deve ter pelo menos 6 caracteres")]
        [Compare(nameof(Senha), ErrorMessage = "A senha e a confirmação não estão iguais")]
        [MaxLength(20)]
        public string ConfirmacaoSenha { get; set; }

        [Required(ErrorMessage = "Informe o login")]
        [Display(Name = "Login")]
        [MaxLength(100)]
        [DataType(DataType.Text)]
        public string Login { get; set; }

       
    }
}