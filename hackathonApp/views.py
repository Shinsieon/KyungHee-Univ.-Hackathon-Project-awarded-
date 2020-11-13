from django.shortcuts import render
import pickle
import os
import pandas as pd
import numpy as np
from sklearn import datasets
from django.conf import settings
from rest_framework import views
from rest_framework import status
from rest_framework.response import Response
from sklearn.ensemble import RandomForestClassifier

def home(request):
    return render(request, 'hackathon/home.html',{})

def survey(request):
    return render(request, 'hackathon/survey.html',{})

def result(request):
    if request.method == 'POST':
        user_name = request.POST.get('user_name_hid')
        user_height = request.POST.get('user_height_hid')
        user_weight = request.POST.get('user_weight_hid')
        
        FF_PIZZA = request.POST.get('FF_PIZZA_hid')
        FF_HAMBER = request.POST.get('FF_HAMBER_hid')
        FF_F_CHIC = request.POST.get('FF_F_CHIC_hid')
        FF_INSTNO = request.POST.get('FF_INSTNO_hid')

        FF_ICECM =request.POST.get('FF_ICECM_hid')
        FF_SNACK = request.POST.get('FF_SNACK_hid')
        FF_CHOCO = request.POST.get('FF_CHOCO_hid')
        FF_MILK = request.POST.get('FF_MILK_hid')

        FF_SOJU =request.POST.get('FF_SOJU_hid')
        FF_BEER = request.POST.get('FF_BEER_hid')
        FF_RWINE = request.POST.get('FF_RWINE_hid')

        FF_SPROU =request.POST.get('FF_SPROU_hid')
        FF_VSALAD = request.POST.get('FF_VSALAD_hid')
        FF_F_EGG = request.POST.get('FF_F_EGG_hid')
        FF_MACKER = request.POST.get('FF_MACKER_hid')
        FF_J_SOYP = request.POST.get('FF_J_SOYP_hid')
        FF_J_KIMC = request.POST.get('FF_J_KIMC_hid')

        BE5_1 = request.POST.get('BE5_1_hid')
        BE3_31  = request.POST.get('BE3_31_hid')
        BE8_1  = request.POST.get('BE8_1_hid')


    model_input = [FF_PIZZA, FF_HAMBER, FF_F_CHIC, FF_INSTNO, FF_ICECM, FF_SNACK,FF_CHOCO, FF_MILK, FF_SOJU, FF_BEER, FF_RWINE, FF_SPROU, FF_VSALAD, FF_F_EGG, FF_MACKER, FF_J_SOYP, FF_J_KIMC, BE5_1, BE3_31, BE8_1]

    with open('models/regr.pkl', 'rb') as f:
        data = pickle.load(f)

    predict_bmi = data.predict(np.array(model_input).reshape(1,-1))

    context = {
        'user_name' : user_name,
        'user_height' : user_height,
        'user_weight' : user_weight,
        'predict_bmi' : predict_bmi,
        'model_input' : model_input,
    }
    return render(request, 'hackathon/result.html',context)