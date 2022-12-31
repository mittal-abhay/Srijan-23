from allauth.account.adapter import DefaultAccountAdapter


class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        data = form.cleaned_data
        
        user.name = data.get('name')
        user.date_of_birth = data.get('date_of_birth')
        user.college = data.get('college')
        user.save()
        return user